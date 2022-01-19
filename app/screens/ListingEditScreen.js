import React, {useState} from 'react';
import {StyleSheet} from "react-native";
import Screen from "../components/Screen";
import * as Yup from 'yup';
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormField from "../components/forms/AppFormField";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import AppFormPicker from "../components/forms/AppFormPicker";
import AppForm from "../components/forms/AppForm";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";


const validationSchema = Yup.object().shape({
    images: Yup.array().min(1, 'Please select at least one image.').max(5, 'Please select no more than 5 images.'),
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description").required().min(5).max(255),
});

const categories = [
    {label: "Furniture", value: 1, key: "furniture", backgroundColor: "#fc5c65", icon: 'apps'},
    {label: "Clothing", value: 2, key: "clothing", backgroundColor: "#fd9644", icon: 'access-point-network'},
    {label: "Electronics", value: 3, key: "electronics", backgroundColor: "#fed330", icon: 'cellphone-iphone'}
];

function ListingEditScreen(props) {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingsApi.addListing({...listing, location},
            progress => setProgress(progress));

        if (!result.ok) {
            setUploadVisible(false);
            return alert("Could not save the listing");
        }
        resetForm();

    }


    return (
        <Screen style={styles.container}>
            <UploadScreen visible={uploadVisible} progress={progress} onDone={() => setUploadVisible(false)}/>
            <AppForm
                initialValues={{images: [], title: "", price: "", category: null, description: ""}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >

                <FormImagePicker
                    name="images"
                />

                <AppFormField width={'75%'} name='title' maxLength={255} placeholder='Title'/>

                <AppFormField
                    name='price'
                    width={'50%'}
                    keyboardType='numeric'
                    maxLength={8}
                    placeholder='Price'/>

                <AppFormPicker
                    PickerItemComponent={CategoryPickerItem}
                    name='category'
                    numberColumns={3}
                    items={categories}
                    placeholder='Category'
                    width={'50%'}
                />

                <AppFormField
                    name='description'
                    placeholder='Description'
                    numberOfLines={3}
                    multiline
                    maxLength={255}
                />

                <AppSubmitButton title='Post'/>

            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5
    }
});

export default ListingEditScreen;
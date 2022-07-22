import axios from "axios";
import { useState } from "react";

export const uploadImage = async (data: any) => {
    const files = data.img[0];

    console.log(files);
    const formData = new FormData();
    formData.append('file', files);
    formData.append('upload_preset', 'v7xao77w');

    const anh = await axios.post('https://api.cloudinary.com/v1_1/dd0io3fh2/image/upload', formData, {
        headers: {
            "Content-Type": "application/form-data"
        }
    })


    return anh.data;
}
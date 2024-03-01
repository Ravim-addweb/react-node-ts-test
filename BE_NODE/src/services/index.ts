import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const fetchPhotosFromFlickr = async (pageNumber = 1, perPage = 20) => {
    try {
        const response = await axios.get(`${process.env.FLICKER_API_ENDPOINT}?format=json&page=${pageNumber}&per_page=${perPage}`);
        const jsonData = response.data.replace(/^jsonFlickrFeed\(/, '').replace(/\);?$/, '');
        const responseData = JSON.parse(jsonData);
        // console.log('responseData', responseData);

        return responseData?.items;
    } catch (error) {
        // throw new Error(`Failed to fetch photos from Flickr API: ${error.message}`);
        console.error(`Failed to fetch photos from Flickr API: ${error.message}`);
    }
}

const searchPhotosByTags = async (tags: string, pageNumber = 1, perPage = 20) => {
    try {
        const response = await axios.get(`${process.env.FLICKER_API_ENDPOINT}?tags=${tags}&format=json&page=${pageNumber}&per_page=${perPage}`);
        const jsonData = response.data.replace(/^jsonFlickrFeed\(/, '').replace(/\);?$/, '');
        const responseData = JSON.parse(jsonData);
        // console.log('responseData', responseData);

        return responseData.items;
    } catch (error) {
        // throw new Error(`Failed to search photos by tags from Flickr API: ${error.message}`);
        console.error(`Failed to search photos by tags from Flickr API: ${error.message}`);
    }
}

export { fetchPhotosFromFlickr, searchPhotosByTags };
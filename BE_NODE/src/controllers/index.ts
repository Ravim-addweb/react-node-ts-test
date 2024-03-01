import { Response, Request } from "express";
import responseCode, { dataArray } from "../responseHandlers/responsecode";
import { fetchPhotosFromFlickr, searchPhotosByTags } from "../services";
import { ImageInfo, QueryParams } from "interfaces";

const controller = {
    /**
         * Fetch all data including photos from Flickr
         */
    fetchAllData: async function fetchAllData(req: Request, res: Response) {
        let result;
        try {
            const { page, per_page } = req.query as unknown as QueryParams;

            // Fetch photos from Flickr
            const photos: [ImageInfo] = await fetchPhotosFromFlickr(page, per_page);

            result = {
                meta: {
                    "responseCode": responseCode.Success,
                    "message": "Photos fetched successfully",
                    "status": "Success",
                    "errors": dataArray
                },
                data: photos
            }
        } catch (err) {
            console.error(err.message);
            result = {
                meta: {
                    "responseCode": responseCode.Internal_Server_Error,
                    "message": "Server error",
                    "status": "Failed",
                    "errors": dataArray
                },
                data: dataArray
            }
        }
        return res.status(result.meta['responseCode']).json(result);
    },

    /**
     * Search photos by tags
     */
    searchByTags: async function searchByTags(req: Request, res: Response) {
        let result;
        try {
            const { tags, page, per_page,  } = req.query as unknown as QueryParams;
            if (!tags) {
                return res.status(responseCode.Bad_Request).json({
                    meta: {
                        "responseCode": responseCode.Bad_Request,
                        "message": "Tags parameter is required",
                        "status": "Failed",
                        "errors": dataArray
                    },
                    data: dataArray
                });
            }

            // Call the function to search photos by tags from Flickr API
            const photos: [ImageInfo] = await searchPhotosByTags(tags, page, per_page);
            result = {
                meta: {
                    "responseCode": responseCode.Success,
                    "message": "Photos fetched successfully",
                    "status": "Success",
                    "errors": dataArray
                },
                data: photos
            }
        } catch (err) {
            console.error(err.message);
            result = {
                meta: {
                    "responseCode": responseCode.Bad_Request,
                    "message": "Failed to fetch photos",
                    "status": "Failed",
                    "errors": dataArray
                },
                data: dataArray
            }
        }
        return res.status(result.meta['responseCode']).json(result);
    }
};

export default controller;

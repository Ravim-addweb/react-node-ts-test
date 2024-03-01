import { Response, Request } from 'express';
import responseCode, { dataArray } from '../../responseHandlers/responsecode';
import { fetchPhotosFromFlickr } from '../../services';
import { ImageInfo, QueryParams } from 'interfaces';

const FlickerController = {
  /**
   * Fetch all data including photos from Flickr
   */
  fetchAllData: async function fetchAllData(req: Request, res: Response) {
    let result;
    try {
      const { tags, page, per_page } = req.query as unknown as QueryParams;

      // Fetch photos from Flickr
      const photos: [ImageInfo] = await fetchPhotosFromFlickr(tags, page, per_page);

      result = {
        meta: {
          responseCode: responseCode.Success,
          message: 'Photos fetched successfully',
          status: 'Success',
          errors: dataArray
        },
        data: photos
      };
    } catch (err) {
      console.error(err.message);
      result = {
        meta: {
          responseCode: responseCode.Internal_Server_Error,
          message: 'Server error',
          status: 'Failed',
          errors: dataArray
        },
        data: dataArray
      };
    }
    return res.status(result.meta['responseCode']).json(result);
  }
};

export default FlickerController;

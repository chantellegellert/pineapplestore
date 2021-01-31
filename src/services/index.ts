import { APIService } from './api.service/api.service';
import { MockAPIService } from './api.service/api.service.mock';

// create ES6 singleton to share service with application
export const apiService = process.env.VUE_APP_MOCK_DATA === 'true' ? new MockAPIService() : new APIService();

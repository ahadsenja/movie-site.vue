import http from '../http/http-common';

class MovieService {
  getAll() {
    return http.get('/?i=tt3896198&apikey=f32d19b1');
  }
}

export default new MovieService();
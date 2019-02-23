import ky from "ky"
import firebase from '../utils/firebase'

const apiPrefixUrl = "https://291bc82rx3.execute-api.ap-northeast-1.amazonaws.com/test"

const client = ky.extend({
  prefixUrl: apiPrefixUrl,
  hooks : {
    beforeRequest : [
      async options => {
        const userToken = await firebase.auth().currentUser.getIdToken(true)
        options.headers = {
          'content-type': 'application/json',
          'X-FIREBASE-TOKEN': userToken,
        }
      }
    ]
  }
});

export default client

const clientId= " ";
const redirectUrl="https://localhost:3000";
let accessToken;

const Spotify={
    getAccessToken(){
        if(accessToken){
            return accessToken;
        }

        const accessTokenMatch=window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch=window.location.href.match(/expires_in=([^&]*)/);
    }
}
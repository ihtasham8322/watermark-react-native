

export const login =  (response) =>{

  return async (dispatch) => {
    const userInfoResponse = await fetch(
      `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
    );
     const userInfo = await userInfoResponse.json();
    console.log("userInfo",userInfo)
  };
    
}
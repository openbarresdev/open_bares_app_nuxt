export const googleAuthHandler = async () => {
  const config = useRuntimeConfig();
    
  const params = new URLSearchParams({
    client_id: config.public.GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID,
    redirect_uri:
      `${config.public.AUTH_ORIGIN}/api/auth/googleAuth` ||
      `${process.env.AUTH_ORIGIN}/api/auth/googleAuth`,
    response_type: "code",
    scope: "openid email profile",
  });

  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
};

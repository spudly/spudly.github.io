const logRequest = middleware => async (response, context) => {
  const startTime = Date.now();
  const nextResponse = await middleware(response, context);
  const ms = Date.now() - startTime;
  console.log(
    `${context.method} ${context.url} - ${nextResponse.status} ${nextResponse.headers['Content-Type']} ${ms}ms`
  );
  return nextResponse;
};

module.exports = logRequest;
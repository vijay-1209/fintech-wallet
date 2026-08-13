import helmet from "helmet";

const securityHeaders = helmet({
  contentSecurityPolicy: false,

  crossOriginResourcePolicy: {
    policy: "cross-origin",
  },
});

export default securityHeaders;
export interface APIGatewayEvent {
  version: string
  routeKey: string
  rawPath: string
  rawQueryString: string
  cookies: string[]
  headers: Headers
  queryStringParameters: QueryStringParameters
  requestContext: RequestContext
  body: string
  pathParameters: PathParameters
  isBase64Encoded: boolean
  stageVariables: StageVariables
}

interface Headers {
  Header1: string
  Header2: string
}

interface QueryStringParameters {
  parameter1: string
  parameter2: string
}

interface RequestContext {
  accountId: string
  apiId: string
  authentication: Authentication
  authorizer: Authorizer
  domainName: string
  domainPrefix: string
  http: Http
  requestId: string
  routeKey: string
  stage: string
  time: string
  timeEpoch: number
}

interface Authentication {
  clientCert: ClientCert
}

interface ClientCert {
  clientCertPem: string
  subjectDN: string
  issuerDN: string
  serialNumber: string
  validity: Validity
}

 interface Validity {
  notBefore: string
  notAfter: string
}

interface Authorizer {
  jwt: Jwt
}

interface Jwt {
  claims: Claims
  scopes: string[]
}

interface Claims {
  claim1: string
  claim2: string
}

interface Http {
  method: string
  path: string
  protocol: string
  sourceIp: string
  userAgent: string
}

interface PathParameters {
  parameter1: string
}

interface StageVariables {
  stageVariable1: string
  stageVariable2: string
}

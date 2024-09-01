# Request Context Middleware

The RequestContextMiddleware is designed to simplify how your application handles the current HTTP request. When a request comes in, this middleware captures the request object and stores it in the RequestContextService. This service can be injected into any part of your application, allowing you to easily access request-specific data, like headers or query parameters, without needing to pass the request object through multiple layers of your code.

By using this middleware, you centralize access to the request object, making your code cleaner and more maintainable. If a service or component needs access to the request data, it can simply retrieve it from the RequestContextService. This approach is particularly useful as your application grows, ensuring that accessing request-related information remains straightforward and efficient.

This service is key when logging user events to get request data such as IP and location.

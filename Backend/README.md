# ECommerce API Platform

## Quick Start

### Prerequisites
- .NET 8 SDK
- PostgreSQL 16
- Docker (optional)

### Local Development

1. Update connection string in `appsettings.json`
2. Run migrations:
```bash
cd ECommerceAPI
dotnet ef migrations add InitialCreate
dotnet ef database update
```

3. Run the application:
```bash
dotnet run
```

4. Access Swagger UI: `http://localhost:5000/swagger`

### Docker Deployment

```bash
docker-compose up -d
```

API will be available at `http://localhost:5000`

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login and get JWT token

### Products
- GET `/api/products` - Get all products
- GET `/api/products/{id}` - Get product by ID
- POST `/api/products` - Create product (Admin only)
- PUT `/api/products/{id}` - Update product (Admin only)
- DELETE `/api/products/{id}` - Delete product (Admin only)

### Categories
- GET `/api/categories` - Get all categories
- GET `/api/categories/{id}` - Get category by ID
- POST `/api/categories` - Create category (Admin only)
- PUT `/api/categories/{id}` - Update category (Admin only)
- DELETE `/api/categories/{id}` - Delete category (Admin only)

### Orders
- GET `/api/orders` - Get user orders
- GET `/api/orders/{id}` - Get order by ID
- POST `/api/orders` - Create order
- PUT `/api/orders/{id}/status` - Update order status (Admin only)

## Default Admin Account

Create manually via register endpoint with Role = "Admin" in database.

## Technologies

- ASP.NET Core 8
- Entity Framework Core 8
- PostgreSQL
- JWT Authentication
- Swagger/OpenAPI
- BCrypt for password hashing
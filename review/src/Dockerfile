FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /myapp
COPY *.sln .
COPY Review.Web/*.csproj ./Review.Web/
RUN dotnet restore ./Review.Web/Review.Web.csproj

# copiar o restante e criar um app
COPY Review.Web/. ./Review.Web/
WORKDIR /myapp/Review.Web
RUN dotnet publish -c release -o /app --no-restore

# estágio da imagem final
FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "Review.Web.dll"]
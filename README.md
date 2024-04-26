# IonicApp

Este es mi primer proyecto de Ionic que utiliza una Web API.

## Descripción

IonicApp es una aplicación móvil desarrollada con el framework Ionic. Esta aplicación se conecta a una Web API para obtener y mostrar datos en dispositivos móviles. El proyecto está diseñado para ser una introducción al desarrollo de aplicaciones móviles con Ionic y el uso de servicios web.

## Instalación

Para ejecutar IonicApp en tu máquina local, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Recrear base de datos.
3. Inicia el Web Api con visualstudio [CAMBIAR PUERTOS].
4. Listo.

## Query Sql Server
-- SE CREA BASE DE DATOS
CREATE DATABASE IonicApp

-- SE USA LA BD
USE IonicApp
GO

-- SE CREA TABLA USUARIO

CREATE TABLE tUser (
Id INT IDENTITY (1,1) PRIMARY KEY,
Nombre VARCHAR(20),
[User] VARCHAR(20),
[Password] VARCHAR(20) 
)

-- SE CREA USUARIO

INSERT INTO IonicApp.dbo.tUser (Nombre, Usuario, [Password]) VALUES ('Gael Flores Cantú', 'Admin', '123');

-- SE CREA SP_LOGIN

CREATE PROCEDURE spLogin 
	@LoginUser VARCHAR(20),
	@LoginPass VARCHAR(20)
AS
BEGIN
SET NOCOUNT ON;

DECLARE @IdUsuario INT;

SELECT @IdUsuario = Id
FROM IonicApp.dbo.tUser
WHERE Usuario = @LoginUser
AND [Password] = @LoginPass

SELECT @IdUsuario AS UsuarioID

END;

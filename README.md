## CONFIGURACIONES
### CONFIGURAR EL PROYECTO
- Para instalar las dependencias correr el comando `npm i`

### CONFIGURAR EL SERVIDOR
- Crear una base de datos en Postgres 

- Ir a src/app.module.ts y modificar de acuerdo a sus credenciales

```
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',  <= (El usuario de tu base de datos)
      password: 'admin',  <= (La contraseña de tu base de datos)
      database: 'task', <= (El nombre de tu base de datos)
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
    CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
 ```

## INICIALIZACIONES
### COMPILAR Y CORRER EL PROYECTO
- Para correr el proyecto usar el comando `npm run start`

### Acceso a las rutas y documentación.
 - Se puede acceder al `localhost:3000/docs`para tener acceso a las rutas del proyecto

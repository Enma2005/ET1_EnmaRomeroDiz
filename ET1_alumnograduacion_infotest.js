
/*
Las definiciones de tests se crearán, para los campos del formulario, mediante un array de nombre ‘nombreentidad_def_tests’ que contenga:

la entidad, 
el campo, 
el número de definición de test (secuencial desde 1 hasta el final)
la descripción del test 
la acción a realizar
el resultado esperado para este test (boolean/string)
el mensaje de respuesta asociado al resultado. (en el mismo idioma para todos los tests)
*/

//DEFINICIONES DE TESTS PARA LOGIN
let alumnograduacion_def_tests = [
    //LOGIN
    
    //ADD LOGIN
    ['alumnograduacion', 'alumnograduacion_login', 1, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_login_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 'Validar que el campo este compuesto por alfabeticos sin ñ ni espacios ni acentos', 'ADD', 'alumnograduacion_login_formato_KO', 'No se admiten ni ñ, ni espacios, ni acentos.'],
    ['alumnograduacion', 'alumnograduacion_login', 3, 'Validar que el campo tenga un minimo de 4 caracteres', 'ADD', 'alumnograduacion_login_min_size_KO', 'Mínimo 4 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_login', 4, 'Validar que el campo tenga un maximo de 15 caracteres', 'ADD', 'alumnograduacion_login_max_size_KO', 'Máximo 15 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_login', 5, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],
    
    //EDITAR LOGIN
    ['alumnograduacion', 'alumnograduacion_login', 6, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_login_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 'Validar que el campo este compuesto por alfabeticos sin ñ ni espacios ni acentos', 'EDIT', 'alumnograduacion_login_formato_KO', 'No se admiten ni ñ, ni espacios, ni acentos.'],
    ['alumnograduacion', 'alumnograduacion_login', 8, 'Validar que el campo tenga un minimo de 4 caracteres', 'EDIT', 'alumnograduacion_login_min_size_KO', 'Mínimo 4 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_login', 9, 'Validar que el campo tenga un maximo de 15 caracteres', 'EDIT', 'alumnograduacion_login_max_size_KO', 'Máximo 15 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_login', 10, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

    //BUSQUEDA LOGIN
    ['alumnograduacion', 'alumnograduacion_login', 11, 'Validar que el campo este vacio o compuesto por alfabeticos sin ñ ni espacios ni acentos ', 'SEARCH', 'alumnograduacion_login_formato_KO', 'No se admiten ni ñ, ni espacios, ni acentos.'],
    ['alumnograduacion', 'alumnograduacion_login', 12, 'Validar que el campo tenga un maximo de 15 caracteres', 'SEARCH', 'alumnograduacion_login_max_size_KO', 'Maximo 15 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_login', 13, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],
   
    //PASSWORD

    //ADD PASSWORD
    ['alumnograduacion', 'alumnograduacion_password', 14, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_password_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_password', 15, 'Validar que el campo tenga un minimo de 8 caracteres', 'ADD', 'alumnograduacion_password_min_size_KO', 'Mínimo 8 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_password', 16, 'Validar que el campo tenga un maximo de 64 caracteres', 'ADD', 'alumnograduacion_password_max_size_KO', 'Máximo 64 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_password', 17, 'Validar que el campo no tenga acentos ni ñ', 'ADD', 'alumnograduacion_password_formato_KO', 'No debe contener ni ñ ni acentos.'],
    ['alumnograduacion', 'alumnograduacion_password', 18, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],
    
    //EDITAR PASSWORD
    ['alumnograduacion', 'alumnograduacion_password', 19, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_password_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_password', 20, 'Validar que el campo tenga un minimo de 8 caracteres', 'EDIT', 'alumnograduacion_password_min_size_KO', 'Mínimo 8 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_password', 21, 'Validar que el campo tenga un maximo de 64 caracteres', 'EDIT', 'alumnograduacion_password_max_size_KO', 'Máximo 64 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_password', 22, 'Validar que el campo no tenga acentos ni ñ', 'EDIT', 'alumnograduacion_password_formato_KO', 'No debe contener ni ñ ni acentos.'],
    ['alumnograduacion', 'alumnograduacion_password', 23, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

    //BUSQUEDA PASSWORD
    ['alumnograduacion', 'alumnograduacion_password', 24, 'Validar que el campo este vacio o compuesto por alfabeticos sin ñ ni espacios ni acentos ', 'SEARCH', 'alumnosgraduacion_password_formato_KO', 'No se admiten ni ñ, ni espacios, ni acentos.'],
    ['alumnograduacion', 'alumnograduacion_password', 25, 'Validar que el campo tenga un minimo de 64 caracteres', 'SEARCH', 'alumnograduacion_password_max_size_KO', 'Maximo 64 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_password', 26, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

    //ADD NOMBRE
    ['alumnograduacion', 'alumnograduacion_nombre', 27, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_nombre_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_nombre', 28, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'ADD', 'alumnograduacion_nombre_formato_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
    ['alumnograduacion', 'alumnograduacion_nombre', 29, 'Validar que el campo tenga un minimo de 2 caracteres', 'ADD', 'alumnograduacion_nombre_min_size_KO', 'Mínimo 2 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_nombre', 30, 'Validar que el campo tenga un maximo de 25 caracteres', 'ADD', 'alumnograduacion_nombre_max_size_KO', 'Máximo 25 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_nombre', 31, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'], 

    //EDITAR NOMBRE
    ['alumnograduacion', 'alumnograduacion_nombre', 32, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_nombre_vacio_KO', 'Complete el campo'],  
    ['alumnograduacion', 'alumnograduacion_nombre', 33, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'EDIT', 'alumnograduacion_nombre_formato_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
    ['alumnograduacion', 'alumnograduacion_nombre', 34, 'Validar que el campo tenga un minimo de 2 caracteres', 'EDIT', 'alumnograduacion_nombre_min_size_KO', 'Mínimo 2 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_nombre', 35, 'Validar que el campo tenga un maximo de 25 caracteres', 'EDIT', 'alumnograduacion_nombre_max_size_KO', 'Máximo 25 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_nombre', 36, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],
    
    //BUSQUEDA NOMBRE
    ['alumnograduacion', 'alumnograduacion_nombre', 37, 'Validar que el campo este vacio o compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'SEARCH', 'alumnograduacion_nombre_formato_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
    ['alumnograduacion', 'alumnograduacion_nombre', 38, 'Validar que el campo tenga un maximo de 25 caracteres', 'SEARCH', 'alumnograduacion_nombre_max_size_KO', 'Maximo 25 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_nombre', 39, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

    //ADD APELLIDOS
    ['alumnograduacion', 'alumnograduacion_apellidos', 40, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_apellidos_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 41, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'ADD', 'alumnograduacion_apellidos_formato_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 42, 'Validar que el campo tenga un minimo de 2 caracteres', 'ADD', 'alumnograduacion_apellidos_min_size_KO', 'Mínimo 2 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 43, 'Validar que el campo tenga un maximo de 35 caracteres', 'ADD', 'alumnograduacion_apellidos_max_size_KO', 'Máximo 35 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_apellidos', 44, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'], 
    
    //EDITAR APELLIDOS
    ['alumnograduacion', 'alumnograduacion_apellidos', 45, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_apellidos_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 46, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'EDIT', 'alumnograduacion_apellidos_formato_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 47, 'Validar que el campo tenga un minimo de 2 caracteres', 'EDIT', 'alumnograduacion_apellidos_min_size_KO', 'Mínimo 2 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 48, 'Validar que el campo tenga un maximo de 35 caracteres', 'EDIT', 'alumnograduacion_apellidos_max_size_KO', 'Máximo 35 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_apellidos', 49, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],
    
    //BUSQUEDA APELLIDOS
    ['alumnograduacion', 'alumnograduacion_apellidos', 50, 'Validar que el campo este vacio o compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'SEARCH', 'alumnograduacion_apellidos_formato_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],            
    ['alumnograduacion', 'alumnograduacion_apellidos', 51, 'Validar que el campo tenga un maximo de 35 caracteres', 'SEARCH', 'alumnograduacion_apellidos_max_size_KO', 'Maximo 35 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 52, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

    //ADD TITULACION
    ['alumnograduacion', 'alumnograduacion_titulacion', 53, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_titulacion_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_titulacion', 54, 'Validar que el campoa sea uno de los siguientes terminos: ["GREI","GRIA","MEI","MIA","PCEO"]', 'ADD', 'alumnograduacion_titulacion_formato_KO', 'No se admiten otros valores que no sean ["GREI","GRIA","MEI","MIA","PCEO"].'],
    ['alumnograduacion', 'alumnograduacion_titulacion', 55, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'], 
    
    //EDITAR TITULACION
    ['alumnograduacion', 'alumnograduacion_titulacion', 56, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_titulacion_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_titulacion', 57, 'Validar que el campoa sea uno de los siguientes terminos: ["GREI","GRIA","MEI","MIA","PCEO"]', 'EDIT', 'alumnograduacion_titulacion_formato_KO', 'No se admiten otros valores que no sean ["GREI","GRIA","MEI","MIA","PCEO"].'],
    ['alumnograduacion', 'alumnograduacion_titulacion', 58, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

    //BUSQUEDA TITULACION
    ['alumnograduacion', 'alumnograduacion_titulacion', 59, 'Validar que el campo este vacio o sea uno de los siguientes terminos: ["GREI","GRIA","MEI","MIA","PCEO"]', 'SEARCH', 'alumnograduacion_titulacion_formato_KO', 'No se admiten otros valores que no sean ["GREI","GRIA","MEI","MIA","PCEO"] o subexpresiones del mismo.'],
    ['alumnograduacion', 'alumnograduacion_titulacion', 60, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],  


    //DNI
    ['alumnograduacion', 'alumnograduacion_dni', 61, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_dni_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_dni', 62, 'Validar que el campo tenga 8 numeros y una letra valida para los numeros','ADD', 'alumnograduacion_dni_formato_KO', 'El formato debe ser 8 dígitos y una letra mayúscula que corresponda al numero.'],
    ['alumnograduacion', 'alumnograduacion_dni', 63, 'Validar que el campo tenga un maximo de 9 caracteres', 'ADD', 'alumnograduacion_dni_max_size_KO', 'Máximo 9 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_dni', 64, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

    //EDITAR DNI
    ['alumnograduacion', 'alumnograduacion_dni', 65, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_dni_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_dni', 66, 'Validar que el campo tenga 8 numeros y una letra valida para los numeros','EDIT', 'alumnograduacion_dni_formato_KO', 'El formato debe ser 8 dígitos y una letra mayúscula que corresponda al numero.'],
    ['alumnograduacion', 'alumnograduacion_dni', 67, 'Validar que el campo tenga un maximo de 9 caracteres', 'EDIT', 'alumnograduacion_dni_max_size_KO', 'Máximo 9 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_dni', 68, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

    //BUSQUEDA DNI
    ['alumnograduacion', 'alumnograduacion_dni', 69, 'Validar que el campo este vacio o tenga 8 numeros y una letra valida para los numeros','SEARCH', 'alumnograduacion_dni_formato_KO', 'El formato debe ser 8 dígitos y una letra mayúscula que corresponda al numero, una subexpresion del mismo o vacio.'],
    ['alumnograduacion', 'alumnograduacion_dni', 70, 'Validar que el campo tenga un maximo de 9 caracteres', 'SEARCH', 'alumnograduacion_dni_max_size_KO', 'Maximo 9 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_dni', 71, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

    //TELEFONO
    ['alumnograduacion', 'alumnograduacion_telefono', 72, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_telefono_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_telefono', 73, 'Validar que el campo tenga un maximo de 9 caracteres', 'ADD', 'alumnograduacion_telefono_max_size_KO', 'Máximo 9 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_telefono', 74, 'Validar que el campo este compuesto por numeros', 'ADD', 'alumnograduacion_telefono_formato_KO', 'Solo se admiten números.'],
    ['alumnograduacion', 'alumnograduacion_telefono', 75, 'Validar que el campo tenga un minimo de 9 caracteres', 'ADD', 'alumnograduacion_telefono_min_size_KO', 'Mínimo 9 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_telefono', 76, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

    //EDITAR TELEFONO
    ['alumnograduacion', 'alumnograduacion_telefono', 77, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_telefono_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_telefono', 78, 'Validar que el campo tenga un maximo de 9 caracteres', 'EDIT', 'alumnograduacion_telefono_max_size_KO', 'Máximo 9 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_telefono', 79, 'Validar que el campo este compuesto por numeros', 'EDIT', 'alumnograduacion_telefono_formato_KO', 'Solo se admiten números.'],
    ['alumnograduacion', 'alumnograduacion_telefono', 80, 'Validar que el campo tenga un minimo de 9 caracteres', 'EDIT', 'alumnograduacion_telefono_min_size_KO', 'Mínimo 9 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_telefono', 81, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

    //BUSQUEDA TELEFONO
    ['alumnograduacion', 'alumnograduacion_telefono', 82, 'Validar que el campo este vacio o compuesto por numeros', 'SEARCH', 'alumnograduacion_telefono_formato_KO', 'Solo se admiten números.'],
    ['alumnograduacion', 'alumnograduacion_telefono', 83, 'Validar que el campo tenga un maximo de 9 caracteres', 'SEARCH', 'alumnograduacion_login_max_size_KO', 'Maximo 9 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_telefono', 84, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

    //DIRECCION
    ['alumnograduacion', 'alumnograduacion_direccion', 85, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_direccion_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_direccion', 86, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'ADD', 'alumnograduacion_direccion_formato_KO', 'No se admiten caracteres que no sean espacios, ñ o acentos.'],
    ['alumnograduacion', 'alumnograduacion_direccion', 87, 'Validar que el campo tenga un minimo de 2 caracteres', 'ADD', 'alumnograduacion_direccion_min_size_KO', 'Mínimo 2 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_direccion', 88, 'Validar que el campo tenga un maximo de 100 caracteres', 'ADD', 'alumnograduacion_direccion_max_size_KO', 'Máximo 100 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_direccion', 89, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'], 

    //EDITAR DIRECCION
    ['alumnograduacion', 'alumnograduacion_direccion', 90, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_direccion_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_direccion', 91, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'EDIT', 'alumnograduacion_direccion_formato_KO', 'No se admiten caracteres que no sean espacios, ñ o acentos.'],
    ['alumnograduacion', 'alumnograduacion_direccion', 92, 'Validar que el campo tenga un minimo de 2 caracteres', 'EDIT', 'alumnograduacion_direccion_min_size_KO', 'Mínimo 2 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_direccion', 93, 'Validar que el campo tenga un maximo de 100 caracteres', 'EDIT', 'alumnograduacion_direccion_max_size_KO', 'Máximo 100 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_direccion', 94, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],
    
    //BUSQUEDA DIRECCION
    ['alumnograduacion', 'alumnograduacion_direccion', 95, 'Validar que el campo este vacio o compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'SEARCH', 'alumnograduacion_direccion_formato_KO', 'No se admiten caracteres que no sean espacios, ñ o acentos.'],
    ['alumnograduacion', 'alumnograduacion_direccion', 96, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

    //EMAIL
    ['alumnograduacion', 'alumnograduacion_email', 97, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_email_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_email', 98, 'Validar que el campo tenga un maximo de 40 caracteres', 'ADD', 'alumnograduacion_email_max_size_KO', 'Máximo 40 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_email', 99, 'Validar que el campo este compuesto por un formato de email valido', 'ADD', 'alumnograduacion_email_formato_KO', 'El formato debe ser email válido.'],
    ['alumnograduacion', 'alumnograduacion_email', 100, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],  

    //EDITAR EMAIL
    ['alumnograduacion', 'alumnograduacion_email', 101, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_email_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_email', 102, 'Validar que el campo tenga un maximo de 40 caracteres', 'EDIT', 'alumnograduacion_email_max_size_KO', 'Máximo 40 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_email', 103, 'Validar que el campo este compuesto por un formato de email valido', 'EDIT', 'alumnograduacion_email_formato_KO', 'El formato debe ser email válido.'],
    ['alumnograduacion', 'alumnograduacion_email', 104, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],
    
    //BUSQUEDA EMAIL
    ['alumnograduacion', 'alumnograduacion_email', 105, 'Validar que el campo este vacio o compuesto por un formato de email valido', 'SEARCH', 'alumnograduacion_email_formato_KO', 'El formato debe ser email válido.'],
    ['alumnograduacion', 'alumnograduacion_email', 106, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

    //FOTOACTO
    ['alumnograduacion', 'alumnograduacion_fotoacto', 107, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_fotoacto_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 108, 'Validar que el campo tenga un nombre con solo alfabeticos sin acentos ni ñ ni espacios', 'ADD', 'alumnograduacion_fotoacto_nombrefoto_formato_KO', 'El formato deben ser alfabeticos sin acentos, ñ ni espacios.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 109, 'Validar que el campo tenga un nombre con un minimo de 7 caracteres', 'ADD', 'alumnograduacion_fotoacto_nombrefoto_min_size_KO', 'El nombre debe contener minimo de 7 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 110, 'Validar que el campo tenga un nombre con un maximo de 40 caracteres', 'ADD', 'alumnograduacion_fotoacto_nombrefoto_max_size_KO', 'El nombre debe contener maximo de 40 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 111, 'Validar que el campo sea una imagen', 'ADD', 'alumnograduacion_fotoacto_formato_KO', 'El formato debe ser jpg.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 112, 'Validar que el campo no supere el tamaño maximo de 2MB', 'ADD', 'alumnograduacion_fotoacto_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 113, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],   

    //EDITAR FOTOACTO
    ['alumnograduacion', 'alumnograduacion_fotoacto', 114, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_fotoacto_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 115, 'Validar que el campo tenga un nombre con solo alfabeticos sin acentos ni ñ ni espacios', 'EDIT', 'alumnograduacion_fotoacto_nombrefoto_formato_KO', 'El formato deben ser alfabeticos sin acentos, ñ ni espacios.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 116, 'Validar que el campo tenga un nombre con un minimo de 7 caracteres', 'EDIT', 'alumnograduacion_fotoacto_nombrefoto_min_size_KO', 'El nombre debe contener minimo de 7 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 117, 'Validar que el campo tenga un nombre con un maximo de 40 caracteres', 'EDIT', 'alumnograduacion_fotoacto_nombrefoto_max_size_KO', 'El nombre debe contener maximo de 40 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 118, 'Validar que el campo sea una imagen', 'EDIT', 'alumnograduacion_fotoacto_formato_KO', 'El formato debe ser jpg.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 119, 'Validar que el campo no supere el tamaño maximo de 2MB', 'EDIT', 'alumnograduacion_fotoacto_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 120, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

    //BUSQUEDA FOTOACTO
    ['alumnograduacion', 'alumnograduacion_fotoacto', 121, 'Validar que el campo este vacio o tenga un nombre con solo alfabeticos sin acentos ni ñ ni espacios', 'SEARCH', 'alumnograduacion_fotoacto_nombrefoto_formato_KO', 'El formato deben ser alfabeticos sin acentos, ñ ni espacios.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 122, 'Validar que el campo tenga un nombre con un maximo de 40 caracteres', 'SEARCH', 'alumnograduacion_fotoacto_nombrefoto_max_size_KO', 'El nombre debe contener maximo de 40 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 123, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],
    

];

/*
Las pruebas se crearán, para los campos del formulario que no sean input tipo file, mediante un array de nombre ‘nombreentidad_tests_fields’ que contenga:

la entidad, 
el campo, 
el número de definición de test, 
el número de prueba (secuencial desde 1 hasta el final)
la acción a realizar
valor/es a probar en array [[atributo, valor]]
el código asociado de error/valor true de éxito
*/

let alumnograduacion_tests_fields = [
    //ADDS


    //LOGIN
    ['alumnograduacion', 'alumnograduacion_login', 1, 1, 'ADD', [{alumnograduacion_loging:''}], 'alumnograduacion_login_vacio_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 2, 'ADD', [{alumnograduacion_login:'abcñ'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 3, 'ADD', [{alumnograduacion_login:'abc def'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 4, 'ADD', [{alumnograduacion_login:'acxddgó'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 5, 'ADD', [{alumnograduacion_login:'acxddgá'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 6, 'ADD', [{alumnograduacion_login:'acéxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 7, 'ADD', [{alumnograduacion_login:'acíddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 8, 'ADD', [{alumnograduacion_login:'úcxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 9, 'ADD', [{alumnograduacion_login:'acxòddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 10, 'ADD', [{alumnograduacion_login:'acxddgè'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 11, 'ADD', [{alumnograduacion_login:'acxìdg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 12, 'ADD', [{alumnograduacion_login:'àcxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 13, 'ADD', [{alumnograduacion_login:'aùxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 14, 'ADD', [{alumnograduacion_login:'acÜxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 15, 'ADD', [{alumnograduacion_login:'acïddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 16, 'ADD', [{alumnograduacion_login:'acôddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 3, 17, 'ADD', [{alumnograduacion_login:'abc'}], 'alumnograduacion_login_min_size_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 4, 18, 'ADD', [{alumnograduacion_login:'abcdefghijklmnoq'}], 'alumnograduacion_login_max_size_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 5, 19, 'ADD', [{alumnograduacion_login:'usuario1'}], true],    
    
    //PASSWORD
    ['alumnograduacion', 'alumnograduacion_password', 14, 20, 'ADD', [{alumnograduacion_password:''}], 'alumnograduacion_password_vacio_KO'],
    ['alumnograduacion', 'alumnograduacion_password', 15, 21, 'ADD', [{alumnograduacion_password:'abc1222'}], 'alumnograduacion_password_min_size_KO'],
    ['alumnograduacion', 'alumnograduacion_password', 16, 22, 'ADD', [{alumnograduacion_password:'abcdefghijklmnoqrsabcdefghijklmnoqrsabcdefghijklmnoqrsabcdddjwijidiefiefe'}], 'alumnograduacion_password_max_size_KO'],
    ['alumnograduacion', 'alumnograduacion_password', 17, 23, 'ADD', [{alumnograduacion_password:'abcñdefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 17, 24, 'ADD', [{alumnograduacion_password:'abcódefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 17, 25, 'ADD', [{alumnograduacion_password:'ábcñdefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 17, 26, 'ADD', [{alumnograduacion_password:'abcñdéfgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 17, 27, 'ADD', [{alumnograduacion_password:'abcñdefghí'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 17, 28, 'ADD', [{alumnograduacion_password:'abcñdefgú'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 17, 29, 'ADD', [{alumnograduacion_password:'àbcñdefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 17, 30, 'ADD', [{alumnograduacion_password:'abcñdèfgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 17, 31, 'ADD', [{alumnograduacion_password:'abcñdefghì'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 17, 32, 'ADD', [{alumnograduacion_password:'aòcñdefgh'}], 'alumnograduacion_password_formato_KO'],              
    ['alumnograduacion', 'alumnograduacion_password', 17, 33, 'ADD', [{alumnograduacion_password:'abcÙdefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 17, 34, 'ADD', [{alumnograduacion_password:'abôcdefgh'}], 'alumnograduacion_password_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_password', 17, 35, 'ADD', [{alumnograduacion_password:'abcüdefgh'}], 'alumnograduacion_password_formato_KO'],  
    ['alumnograduacion', 'alumnograduacion_password', 18, 36, 'ADD', [{alumnograduacion_password:'password1'}], true],

    //NOMBRE                                
    ['alumnograduacion', 'alumnograduacion_nombre', 11, 1, 'ADD', [{alumnograduacion_nombre:''}], 'alumnograduacion_nombre_vacio_KO'],      
    ['alumnograduacion', 'alumnograduacion_nombre', 12, 1, 'ADD', [{alumnograduacion_nombre:'abc123'}], 'alumnograduacion_nombre_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 12, 1, 'ADD', [{alumnograduacion_nombre:'ab.sdff'}], 'alumnograduacion_nombre_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 12, 1, 'ADD', [{alumnograduacion_nombre:'abcsds.'}], 'alumnograduacion_nombre_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 12, 1, 'ADD', [{alumnograduacion_nombre:'(abcsadasf'}], 'alumnograduacion_nombre_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 13, 1, 'ADD', [{alumnograduacion_nombre:'a'}], 'alumnograduacion_nombre_min_size_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 14, 1, 'ADD', [{alumnograduacion_nombre:'abcdefghijklmnoqrsabcdefghijklmnoqrsabcd'}], 'alumnograduacion_nombre_max_size_KO'],           
    ['alumnograduacion', 'alumnograduacion_nombre', 15, 1, 'ADD', [{alumnograduacion_nombre:'Nombre'}], true],  
    
    //APELLIDOS 
    ['alumnograduacion', 'alumnograduacion_apellidos', 16, 1, 'ADD', [{alumnograduacion_apellidos:''}], 'alumnograduacion_apellidos_vacio_KO'],     
    ['alumnograduacion', 'alumnograduacion_apellidos', 17, 1, 'ADD', [{alumnograduacion_apellidos:'abc123'}], 'alumnograduacion_apellidos_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_apellidos', 17, 1, 'ADD', [{alumnograduacion_apellidos:'abcsad.'}], 'alumnograduacion_apellidos_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 17, 1, 'ADD', [{alumnograduacion_apellidos:'abc.zsad'}], 'alumnograduacion_apellidos_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 17, 1, 'ADD', [{alumnograduacion_apellidos:'(abcsfa'}], 'alumnograduacion_apellidos_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 18, 1, 'ADD', [{alumnograduacion_apellidos:'a'}], 'alumnograduacion_apellidos_min_size_KO'], 
    ['alumnograduacion', 'alumnograduacion_apellidos', 19, 1, 'ADD', [{alumnograduacion_apellidos:'abcdefghijklmnoqrsabcdefghijklmnoqrsabcd'}], 'alumnograduacion_apellidos_max_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_apellidos', 20, 1, 'ADD', [{alumnograduacion_apellidos:'Apellidos'}], true],
    
    //TITULACION            
    ['alumnograduacion', 'alumnograduacion_titulacion', 21, 1, 'ADD', [{alumnograduacion_titulacion:''}], 'alumnograduacion_titulacion_vacio_KO'],      
    ['alumnograduacion', 'alumnograduacion_titulacion', 22, 1, 'ADD', [{alumnograduacion_titulacion:'ABC'}], 'alumnograduacion_titulacion_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_titulacion', 23, 1, 'ADD', [{alumnograduacion_titulacion:'GREI'}], true],        
   
    //DNI       
    ['alumnograduacion', 'alumnograduacion_dni', 24, 1, 'ADD', [{alumnograduacion_dni:''}], 'alumnograduacion_dni_vacio_KO'],       
    ['alumnograduacion', 'alumnograduacion_dni', 25, 1, 'ADD', [{alumnograduacion_dni:'1234567A'}], 'alumnograduacion_dni_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_dni', 26, 1, 'ADD', [{alumnograduacion_dni:'123456789A'}], 'alumnograduacion_dni_max_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_dni', 27, 1, 'ADD', [{alumnograduacion_dni:'12345678Z'}], true], 
   
    //TELEFONO
    ['alumnograduacion', 'alumnograduacion_telefono', 28, 1, 'ADD', [{alumnograduacion_telefono:''}], 'alumnograduacion_telefono_vacio_KO'],       
    ['alumnograduacion', 'alumnograduacion_telefono', 29, 1, 'ADD', [{alumnograduacion_telefono:'1234567890'}], 'alumnograduacion_telefono_max_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_telefono', 30, 1, 'ADD', [{alumnograduacion_telefono:'12345abcd'}], 'alumnograduacion_telefono_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_telefono', 30, 1, 'ADD', [{alumnograduacion_telefono:'12345.898'}], 'alumnograduacion_telefono_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_telefono', 30, 1, 'ADD', [{alumnograduacion_telefono:'12345355.'}], 'alumnograduacion_telefono_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_telefono', 31, 1, 'ADD', [{alumnograduacion_telefono:'12345678'}], 'alumnograduacion_telefono_min_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_telefono', 32, 1, 'ADD', [{alumnograduacion_telefono:'123456789'}], true],
    
    //DIRECCION
    ['alumnograduacion', 'alumnograduacion_direccion', 33, 1, 'ADD', [{alumnograduacion_direccion:''}], 'alumnograduacion_direccion_vacio_KO'],      
    ['alumnograduacion', 'alumnograduacion_direccion', 34, 1, 'ADD', [{alumnograduacion_direccion:'aiooieef*sd'}], 'alumnograduacion_direccion_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_direccion', 35, 1, 'ADD', [{alumnograduacion_direccion:'a'}], 'alumnograduacion_direccion_min_size_KO'], 
    ['alumnograduacion', 'alumnograduacion_direccion', 36, 1, 'ADD', [{alumnograduacion_direccion:'abcdefghhjgfghdhfdfdfdgdfhfdfhdhfdhfijklmnoqrsabcdefghijklmnoqrsabcdugyjgghbhjhjhcfhhghjggjhfghffjgfjhhfffgfhfhdrsg'}], 'alumnograduacion_direccion_max_size_KO'],           
    ['alumnograduacion', 'alumnograduacion_direccion', 37, 1, 'ADD', [{alumnograduacion_direccion:'Direccion 123'}], true],             

    //EMAIL
    ['alumnograduacion', 'alumnograduacion_email', 38, 1, 'ADD', [{alumnograduacion_email:''}], 'alumnograduacion_email_vacio_KO'],      
    ['alumnograduacion', 'alumnograduacion_email', 39, 1, 'ADD', [{alumnograduacion_email:'a'.repeat(41)+'@gmail.com'}], 'alumnograduacion_email_max_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_email', 40, 1, 'ADD', [{alumnograduacion_email:'emailformatoKO'}], 'alumnograduacion_email_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_email', 41, 1, 'ADD', [{alumnograduacion_email:'ndjdndfbsfks'+'  '}], 'alumnograduacion_email_formato_KO'],  
    ['alumnograduacion', 'alumnograduacion_email', 42, 1, 'ADD', [{alumnograduacion_email:' '+'@gmail.com'}], 'alumnograduacion_email_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_email', 44, 1, 'ADD', [{alumnograduacion_email:'sdfsd.' +'@gmail.com'}], 'alumnograduacion_email_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_email', 45, 1, 'ADD', [{alumnograduacion_email:'.sdfsdf'+'@gmail.com'}], 'alumnograduacion_email_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_email', 46, 1, 'ADD', [{alumnograduacion_email:' sf.sfsd'+'@gmail.com'}], 'alumnograduacion_email_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_email', 47, 1, 'ADD', [{alumnograduacion_email:'sdasjaisjaj@gmail.com'}], true],   

    //FINAL ADDS

   
   
    //EDITS
    
    //LOGIN
    ['alumnograduacion', 'alumnograduacion_login', 6, 1, 'EDIT', [{alumnograduacion_loging:''}], 'alumnograduacion_login_vacio_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 2, 'EDIT', [{alumnograduacion_login:'abcñ'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 3, 'EDIT', [{alumnograduacion_login:'abc def'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 4, 'EDIT', [{alumnograduacion_login:'acxddgó'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 5, 'EDIT', [{alumnograduacion_login:'acxddgá'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 6, 'EDIT', [{alumnograduacion_login:'acéxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 7, 'EDIT', [{alumnograduacion_login:'acíddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 8, 'EDIT', [{alumnograduacion_login:'úcxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 9, 'EDIT', [{alumnograduacion_login:'acxòddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 10, 'EDIT', [{alumnograduacion_login:'acxddgè'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 11, 'EDIT', [{alumnograduacion_login:'acxìdg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 12, 'EDIT', [{alumnograduacion_login:'àcxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 13, 'EDIT', [{alumnograduacion_login:'aùxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 14, 'EDIT', [{alumnograduacion_login:'acÜxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 15, 'EDIT', [{alumnograduacion_login:'acïddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 7, 16, 'EDIT', [{alumnograduacion_login:'acôddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 8, 17, 'EDIT', [{alumnograduacion_login:'abc'}], 'alumnograduacion_login_min_size_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 9, 18, 'EDIT', [{alumnograduacion_login:'abcdefghijklmnoq'}], 'alumnograduacion_login_max_size_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 10, 19, 'EDIT', [{alumnograduacion_login:'usuario1'}], true],    
    
    //PASSWORD
    ['alumnograduacion', 'alumnograduacion_password', 19, 1, 'EDIT', [{alumnograduacion_password:''}], 'alumnograduacion_password_vacio_KO'],   
    ['alumnograduacion', 'alumnograduacion_password', 20, 1, 'EDIT', [{alumnograduacion_password:'abc'}], 'alumnograduacion_password_min_size_KO'],
    ['alumnograduacion', 'alumnograduacion_password', 21, 1, 'EDIT', [{alumnograduacion_password:'abcdefghijklmnoqrsabcdefghijklmnoqrsabcdefghijklmnoqrsabcdSDSFFDSAF'}], 'alumnograduacion_password_max_size_KO'],
    ['alumnograduacion', 'alumnograduacion_password', 22, 23, 'EDIT', [{alumnograduacion_password:'abcñdefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 22, 24, 'EDIT', [{alumnograduacion_password:'abcódefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 22, 25, 'EDIT', [{alumnograduacion_password:'ábcñdefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 22, 26, 'EDIT', [{alumnograduacion_password:'abcñdéfgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 22, 27, 'EDIT', [{alumnograduacion_password:'abcñdefghí'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 22, 28, 'EDIT', [{alumnograduacion_password:'abcñdefgú'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 22, 29, 'EDIT', [{alumnograduacion_password:'àbcñdefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 22, 30, 'EDIT', [{alumnograduacion_password:'abcñdèfgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 22, 31, 'EDIT', [{alumnograduacion_password:'abcñdefghì'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 22, 32, 'EDIT', [{alumnograduacion_password:'aòcñdefgh'}], 'alumnograduacion_password_formato_KO'],              
    ['alumnograduacion', 'alumnograduacion_password', 22, 33, 'EDIT', [{alumnograduacion_password:'abcÙdefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 22, 34, 'EDIT', [{alumnograduacion_password:'abôcdefgh'}], 'alumnograduacion_password_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_password', 22, 35, 'EDIT', [{alumnograduacion_password:'abcüdefgh'}], 'alumnograduacion_password_formato_KO'],  
    ['alumnograduacion', 'alumnograduacion_password', 23, 1, 'EDIT', [{alumnograduacion_password:'password1'}], true],
    
    //NOMBRE                                
    ['alumnograduacion', 'alumnograduacion_nombre', 63, 1, 'EDIT', [{alumnograduacion_nombre:''}], 'alumnograduacion_nombre_vacio_KO'],      
    ['alumnograduacion', 'alumnograduacion_nombre', 12, 1, 'EDIT', [{alumnograduacion_nombre:'abc123'}], 'alumnograduacion_nombre_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 12, 1, 'EDIT', [{alumnograduacion_nombre:'ab.sdff'}], 'alumnograduacion_nombre_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 12, 1, 'EDIT', [{alumnograduacion_nombre:'abcsds.'}], 'alumnograduacion_nombre_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 12, 1, 'EDIT', [{alumnograduacion_nombre:'(abcsadasf'}], 'alumnograduacion_nombre_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 65, 1, 'EDIT', [{alumnograduacion_nombre:'a'}], 'alumnograduacion_nombre_min_size_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 66, 1, 'EDIT', [{alumnograduacion_nombre:'abcdefghijklmnoqrsabcdefghijklmnoqrsabcd'}], 'alumnograduacion_nombre_max_size_KO'],           
    ['alumnograduacion', 'alumnograduacion_nombre', 67, 1, 'EDIT', [{alumnograduacion_nombre:'Nombre'}], true],  
    
    //APELLIDOS
    ['alumnograduacion', 'alumnograduacion_apellidos', 68, 1, 'EDIT', [{alumnograduacion_apellidos:''}], 'alumnograduacion_apellidos_vacio_KO'],     
    ['alumnograduacion', 'alumnograduacion_apellidos', 17, 1, 'EDIT', [{alumnograduacion_apellidos:'abc123'}], 'alumnograduacion_apellidos_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_apellidos', 17, 1, 'EDIT', [{alumnograduacion_apellidos:'abcsad.'}], 'alumnograduacion_apellidos_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 17, 1, 'EDIT', [{alumnograduacion_apellidos:'abc.zsad'}], 'alumnograduacion_apellidos_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 17, 1, 'EDIT', [{alumnograduacion_apellidos:'(abcsfa'}], 'alumnograduacion_apellidos_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 70, 1, 'EDIT', [{alumnograduacion_apellidos:'a'}], 'alumnograduacion_apellidos_min_size_KO'], 
    ['alumnograduacion', 'alumnograduacion_apellidos', 71, 1, 'EDIT', [{alumnograduacion_apellidos:'abcdefghijklmnoqrsabcdefghijklmnoqrsabcd'}], 'alumnograduacion_apellidos_max_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_apellidos', 72, 1, 'EDIT', [{alumnograduacion_apellidos:'Apellidos'}], true],
    
    //TITULACION            
    ['alumnograduacion', 'alumnograduacion_titulacion', 73, 1, 'EDIT', [{alumnograduacion_titulacion:''}], 'alumnograduacion_titulacion_vacio_KO'],      
    ['alumnograduacion', 'alumnograduacion_titulacion', 74, 1, 'EDIT', [{alumnograduacion_titulacion:'ABC'}], 'alumnograduacion_titulacion_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_titulacion', 75, 1, 'EDIT', [{alumnograduacion_titulacion:'GREI'}], true],        
  
    //DNI       
    ['alumnograduacion', 'alumnograduacion_dni', 76, 1, 'EDIT', [{alumnograduacion_dni:''}], 'alumnograduacion_dni_vacio_KO'],     
    ['alumnograduacion', 'alumnograduacion_dni', 25, 1, 'ADD', [{alumnograduacion_dni:'1234567A'}], 'alumnograduacion_dni_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_dni', 78, 1, 'EDIT', [{alumnograduacion_dni:'123456789A'}], 'alumnograduacion_dni_max_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_dni', 79, 1, 'EDIT', [{alumnograduacion_dni:'12345678Z'}], true], 
  
    //TELEFONO
    ['alumnograduacion', 'alumnograduacion_telefono', 80, 1, 'EDIT', [{alumnograduacion_telefono:''}], 'alumnograduacion_telefono_vacio_KO'],       
    ['alumnograduacion', 'alumnograduacion_telefono', 81, 1, 'EDIT', [{alumnograduacion_telefono:'1234567890'}], 'alumnograduacion_telefono_max_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_telefono', 30, 1, 'EDIT', [{alumnograduacion_telefono:'12345abcd'}], 'alumnograduacion_telefono_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_telefono', 30, 1, 'EDIT', [{alumnograduacion_telefono:'12345.898'}], 'alumnograduacion_telefono_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_telefono', 30, 1, 'EDIT', [{alumnograduacion_telefono:'12345355.'}], 'alumnograduacion_telefono_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_telefono', 83, 1, 'EDIT', [{alumnograduacion_telefono:'12345678'}], 'alumnograduacion_telefono_min_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_telefono', 84, 1, 'EDIT', [{alumnograduacion_telefono:'123456789'}], true],
   
    //DIRECCION
    ['alumnograduacion', 'alumnograduacion_direccion', 85, 1, 'EDIT', [{alumnograduacion_direccion:''}], 'alumnograduacion_direccion_vacio_KO'],      
    ['alumnograduacion', 'alumnograduacion_direccion', 86, 1, 'EDIT', [{alumnograduacion_direccion:'abc*qfd323'}], 'alumnograduacion_direccion_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_direccion', 87, 1, 'EDIT', [{alumnograduacion_direccion:'a'}], 'alumnograduacion_direccion_min_size_KO'], 
    ['alumnograduacion', 'alumnograduacion_direccion', 88, 1, 'EDIT', [{alumnograduacion_direccion:'abcdefghijklmnoqrsabcdefghijklmnoqrsabcdabcdefghijklmnoqrsabcdefghijklmnoqrsabcdabcdefghijklmnoqrsabcdefghijklm'}], 'alumnograduacion_direccion_max_size_KO'],           
    ['alumnograduacion', 'alumnograduacion_direccion', 89, 1, 'EDIT', [{alumnograduacion_direccion:'Direccion 123'}], true],    
   
    //EMAIL
    ['alumnograduacion', 'alumnograduacion_email', 90, 1, 'EDIT', [{alumnograduacion_email:''}], 'alumnograduacion_email_vacio_KO'],      
    ['alumnograduacion', 'alumnograduacion_email', 91, 1, 'EDIT', [{alumnograduacion_email:'a'.repeat(41)+'@gmail.com'}], 'alumnograduacion_email_max_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_email', 40, 1, 'EDIT', [{alumnograduacion_email:'emailformatoKO'}], 'alumnograduacion_email_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_email', 41, 1, 'EDIT', [{alumnograduacion_email:'ndjdndfbsfks'+'  '}], 'alumnograduacion_email_formato_KO'],  
    ['alumnograduacion', 'alumnograduacion_email', 42, 1, 'EDIT', [{alumnograduacion_email:' '+'@gmail.com'}], 'alumnograduacion_email_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_email', 44, 1, 'EDIT', [{alumnograduacion_email:'sdfsd.' +'@gmail.com'}], 'alumnograduacion_email_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_email', 45, 1, 'EDIT', [{alumnograduacion_email:'.sdfsdf'+'@gmail.com'}], 'alumnograduacion_email_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_email', 46, 1, 'EDIT', [{alumnograduacion_email:' sf.sfsd'+'@gmail.com'}], 'alumnograduacion_email_formato_KO'],     
    ['alumnograduacion', 'alumnograduacion_email', 47, 1, 'EDIT', [{alumnograduacion_email:'sdasjaisjaj@gmail.com'}], true],   


    //FINAL EDITS
    
    
    //SEARCH
    
    //LOGIN
    ['alumnograduacion', 'alumnograduacion_login', 11, 2, 'SEARCH', [{alumnograduacion_login:'abcñ'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 11, 3, 'SEARCH', [{alumnograduacion_login:'abc def'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login',11, 4, 'SEARCH', [{alumnograduacion_login:'acxddgó'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login',11, 5, 'SEARCH', [{alumnograduacion_login:'acxddgá'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login',11, 6, 'SEARCH', [{alumnograduacion_login:'acéxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 11, 7, 'SEARCH', [{alumnograduacion_login:'acíddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login',11, 8, 'SEARCH', [{alumnograduacion_login:'úcxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login',11, 9, 'SEARCH', [{alumnograduacion_login:'acxòddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login',11, 10, 'SEARCH', [{alumnograduacion_login:'acxddgè'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login',11, 11, 'SEARCH', [{alumnograduacion_login:'acxìdg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login',11, 12, 'SEARCH', [{alumnograduacion_login:'àcxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login',11, 13, 'SEARCH', [{alumnograduacion_login:'aùxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login',11, 14, 'SEARCH', [{alumnograduacion_login:'acÜxddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login',11, 15, 'SEARCH', [{alumnograduacion_login:'acïddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login',11, 16, 'SEARCH', [{alumnograduacion_login:'acôddg'}], 'alumnograduacion_login_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 12, 18, 'SEARCH', [{alumnograduacion_login:'abcdefghijklmnoq'}], 'alumnograduacion_login_max_size_KO'],
    ['alumnograduacion', 'alumnograduacion_login', 12, 1, 'SEARCH', [{alumnograduacion_login:'usuario1'}], true],
   
    //PASSWORD
    ['alumnograduacion', 'alumnograduacion_password', 24, 1, 'SEARCH', [{alumnograduacion_password:'abcdefghijklmnoqrsabcdefghijklmnoqrsabcdefghijklmnoqrsabcdSDSFFDSAF'}], 'alumnograduacion_password_max_size_KO'],
    ['alumnograduacion', 'alumnograduacion_password', 25, 23, 'SEARCH', [{alumnograduacion_password:'abcñdefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 25, 24, 'SEARCH', [{alumnograduacion_password:'abcódefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 25, 25, 'SEARCH', [{alumnograduacion_password:'ábcñdefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 25, 26, 'SEARCH', [{alumnograduacion_password:'abcñdéfgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 25, 27, 'SEARCH', [{alumnograduacion_password:'abcñdefghí'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 25, 28, 'SEARCH', [{alumnograduacion_password:'abcñdefgú'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 25, 29, 'SEARCH', [{alumnograduacion_password:'àbcñdefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 25, 30, 'SEARCH', [{alumnograduacion_password:'abcñdèfgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 25, 31, 'SEARCH', [{alumnograduacion_password:'abcñdefghì'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 25, 32, 'SEARCH', [{alumnograduacion_password:'aòcñdefgh'}], 'alumnograduacion_password_formato_KO'],              
    ['alumnograduacion', 'alumnograduacion_password', 25, 33, 'SEARCH', [{alumnograduacion_password:'abcÙdefgh'}], 'alumnograduacion_password_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_password', 25, 34, 'SEARCH', [{alumnograduacion_password:'abôcdefgh'}], 'alumnograduacion_password_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_password', 25, 35, 'SEARCH', [{alumnograduacion_password:'abcüdefgh'}], 'alumnograduacion_password_formato_KO'],  
    ['alumnograduacion', 'alumnograduacion_password', 26, 1, 'SEARCH', [{alumnograduacion_password:'password1'}], true],

    //NOMBRE    
    ['alumnograduacion', 'alumnograduacion_nombre', 12, 1, 'SEARCH', [{alumnograduacion_nombre:'abc123'}], 'alumnograduacion_nombre_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 12, 1, 'SEARCH', [{alumnograduacion_nombre:'ab.sdff'}], 'alumnograduacion_nombre_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 12, 1, 'SEARCH', [{alumnograduacion_nombre:'abcsds.'}], 'alumnograduacion_nombre_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 12, 1, 'SEARCH', [{alumnograduacion_nombre:'(abcsadasf'}], 'alumnograduacion_nombre_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 65, 1, 'SEARCH', [{alumnograduacion_nombre:'a'}], 'alumnograduacion_nombre_min_size_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 66, 1, 'SEARCH', [{alumnograduacion_nombre:'abcdefghijklmnoqrsabcdefghijklmnoqrsabcd'}], 'alumnograduacion_nombre_max_size_KO'],
    ['alumnograduacion', 'alumnograduacion_nombre', 106, 1, 'SEARCH', [{alumnograduacion_nombre:'Nombre'}], true],
   
    //APELLIDOS
    ['alumnograduacion', 'alumnograduacion_apellidos', 17, 1, 'SEARCH', [{alumnograduacion_apellidos:'abc123'}], 'alumnograduacion_apellidos_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_apellidos', 17, 1, 'SEARCH', [{alumnograduacion_apellidos:'abcsad.'}], 'alumnograduacion_apellidos_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 17, 1, 'SEARCH', [{alumnograduacion_apellidos:'abc.zsad'}], 'alumnograduacion_apellidos_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 17, 1, 'SEARCH', [{alumnograduacion_apellidos:'(abcsfa'}], 'alumnograduacion_apellidos_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 70, 1, 'SEARCH', [{alumnograduacion_apellidos:'a'}], 'alumnograduacion_apellidos_min_size_KO'], 
    ['alumnograduacion', 'alumnograduacion_apellidos', 71, 1, 'SEARCH', [{alumnograduacion_apellidos:'abcdefghijklmnoqrsabcdefghijklmnoqrsabcd'}], 'alumnograduacion_apellidos_max_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_apellidos', 108, 1, 'SEARCH', [{alumnograduacion_apellidos:'Apellidos'}], true],
    
    //TITULACION            
    ['alumnograduacion', 'alumnograduacion_titulacion', 74, 1, 'SEARCH', [{alumnograduacion_titulacion:'ABC'}], 'alumnograduacion_titulacion_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_titulacion', 110, 1, 'SEARCH', [{alumnograduacion_titulacion:'GREI'}], true],        
   
    //DNI       
    ['alumnograduacion', 'alumnograduacion_dni', 25, 1, 'ADD', [{alumnograduacion_dni:'1234567A'}], 'alumnograduacion_dni_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_dni', 78, 1, 'SEARCH', [{alumnograduacion_dni:'123456789A'}], 'alumnograduacion_dni_max_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_dni', 112, 1, 'SEARCH', [{alumnograduacion_dni:'12345678Z'}], true], 
    
    //TELEFONO
    ['alumnograduacion', 'alumnograduacion_telefono', 81, 1, 'SEARCH', [{alumnograduacion_telefono:'1234567890'}], 'alumnograduacion_telefono_max_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_telefono', 30, 1, 'SEARCH', [{alumnograduacion_telefono:'12345abcd'}], 'alumnograduacion_telefono_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_telefono', 30, 1, 'SEARCH', [{alumnograduacion_telefono:'12345.898'}], 'alumnograduacion_telefono_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_telefono', 30, 1, 'SEARCH', [{alumnograduacion_telefono:'12345355.'}], 'alumnograduacion_telefono_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_telefono', 114, 1, 'SEARCH', [{alumnograduacion_telefono:'123456789'}], true],
   
    //DIRECCION
    ['alumnograduacion', 'alumnograduacion_direccion', 86, 1, 'SEARCH', [{alumnograduacion_direccion:'abc*qfd323'}], 'alumnograduacion_direccion_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_direccion', 87, 1, 'SEARCH', [{alumnograduacion_direccion:'a'}], 'alumnograduacion_direccion_min_size_KO'], 
    ['alumnograduacion', 'alumnograduacion_direccion', 88, 1, 'SEARCH', [{alumnograduacion_direccion:'abcdefghijklmnoqrsabcdefghijklmnoqrsabcdabcdefghijklmnoqrsabcdefghijklmnoqrsabcdabcdefghijklmnoqrsabcdefghijklm'}], 'alumnograduacion_direccion_max_size_KO'],           
    ['alumnograduacion', 'alumnograduacion_direccion', 116, 1, 'SEARCH', [{alumnograduacion_direccion:'Direccion 123'}], true],
    
    //EMAIL
    ['alumnograduacion', 'alumnograduacion_email', 91, 1, 'SEARCH', [{alumnograduacion_email:'a'.repeat(41)+'@gmail.com'}], 'alumnograduacion_email_max_size_KO'],  
    ['alumnograduacion', 'alumnograduacion_email', 40, 1, 'SEARCH', [{alumnograduacion_email:'emailformatoKO'}], 'alumnograduacion_email_formato_KO'], 
    ['alumnograduacion', 'alumnograduacion_email', 41, 1, 'SEARCH', [{alumnograduacion_email:'ndjdndfbsfks'+'  '}], 'alumnograduacion_email_formato_KO'],  
    ['alumnograduacion', 'alumnograduacion_email', 42, 1, 'SEARCH', [{alumnograduacion_email:' '+'@gmail.com'}], 'alumnograduacion_email_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_email', 44, 1, 'SEARCH', [{alumnograduacion_email:'sdfsd.' +'@gmail.com'}], 'alumnograduacion_email_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_email', 45, 1, 'SEARCH', [{alumnograduacion_email:'.sdfsdf'+'@gmail.com'}], 'alumnograduacion_email_formato_KO'],
    ['alumnograduacion', 'alumnograduacion_email', 46, 1, 'SEARCH', [{alumnograduacion_email:' sf.sfsd'+'@gmail.com'}], 'alumnograduacion_email_formato_KO'],     
    ['alumnograduacion', 'alumnograduacion_email', 47, 1, 'SEARCH', [{alumnograduacion_email:'sdasjaisjaj@gmail.com'}], true],   


    //FINAL SEARCH
];

/*

Las pruebas para tipo file se crearán mediante un array de nombre ‘nombrentidad_tests_files’ que contenga:

la entidad, 
el campo, 
el número de definición de test, 
el número de prueba (secuencial desde 1 hasta el final)
la acción a realizar
// SOBRA el parámetro a probar (max_size_file, type_file, format_name_file)
// valor/es de parámetro a probar [[parámetro, valor]] el código asociado de error/valor true de éxito

*/

let alumnograduacion_tests_files = [
    //FOTOACTO
    //AÑADIR FOTOACTO
    ['alumnograduacion', 'alumnograduacion_fotoacto', 1, 1, 'ADD', existe, [{max_size_file:''},{type_file: ''},{format_name_file: ''}], 'alumnograduacion_fotoacto_vacio_KO'], 
    ['alumnograduacion', 'alumnograduacion_fotoacto', 1, 1, 'ADD', max_size_file, [{max_size_file:21},{type_file:jpg},{format_name_file: 'foto.jpg'}], 'alumnograduacion_fotoacto_max_size_KO'], //20MB
    ['alumnograduacion', 'alumnograduacion_fotoacto', 2, 1, 'ADD', type_file, [{max_size_file:19},{type_file: 'pdf'},{format_name_file: 'foto.pdf'}], 'alumnograduacion_fotoacto_formato_KO'], //formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'ADD', format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nombre con espacios.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato pdf
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'ADD', format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file :  'nombreconñ.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'ADD',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nombró.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'ADD',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nombreúespacios.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'ADD',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'Ámbreespacios.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 5, 1, 'ADD',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'n'.repeat(41)+'.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_max_size_KO'], //nombre con 41 caracteres y formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 5, 1, 'ADD',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nsdskj.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_min_size_KO'], 
    ['alumnograduacion', 'alumnograduacion_fotoacto', 6, 1, 'ADD', [{max_size_file: 1}, {'type_file': 'jpg'}, {'format_name_file': 'nombrecorrecto.jpg'}], true], //correcto 
   
    //EDITAR FOTOACTO
    ['alumnograduacion', 'alumnograduacion_fotoacto', 1, 1, 'ADD', existe, [{max_size_file:''},{type_file: ''},{format_name_file: ''}], 'alumnograduacion_fotoacto_vacio_KO'], 
    ['alumnograduacion', 'alumnograduacion_fotoacto', 1, 1, 'EDIT', max_size_file, [{max_size_file:21},{type_file:jpg},{format_name_file: 'foto.jpg'}], 'alumnograduacion_fotoacto_max_size_KO'], //20MB
    ['alumnograduacion', 'alumnograduacion_fotoacto', 2, 1, 'EDIT', type_file, [{max_size_file:19},{type_file: 'pdf'},{format_name_file: 'foto.pdf'}], 'alumnograduacion_fotoacto_formato_KO'], //formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 10, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nom.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_min_size_KO'], //nombre con 3 caracteres y formato pdf
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nombre con espacios.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato pdf
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nombreconñ.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato pdf
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nombró.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nombreúespacios.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'Ámbreespacios.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 5, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'n'.repeat(41)+'.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_max_size_KO'], //nombre con 41 caracteres y formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 5, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nsdskj.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_min_size_KO'], 
    ['alumnograduacion', 'alumnograduacion_fotoacto', 6, 1, 'EDIT', [{max_size_file: 1}, {'type_file': 'jpg'}, {'format_name_file': 'nombrecorrecto.jpg'}], true], //correcto 

    //BUSCAR FOTOACTO
    ['alumnograduacion', 'alumnograduacion_fotoacto', 10, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nom.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_min_size_KO'], //nombre con 3 caracteres y formato pdf
    ['alumnograduacion', 'alumnograduacion_fotoacto', 11, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'n'.repeat(41)+'.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_max_size_KO'], //nombre con 41 caracteres y formato pdf
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nombre con espacios.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato pdf
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nombreconñ.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato pdf
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nombró.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'nombreúespacios.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 3, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'Ámbreespacios.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_formato_KO'], //nombre con espacios y formato jpg
    ['alumnograduacion', 'alumnograduacion_fotoacto', 5, 1, 'EDIT',format_name_file, [{max_size_file:19},{type_file: 'jpg'},{format_name_file : 'n'.repeat(41)+'.jpg'}], 'alumnograduacion_fotoacto_nombrefoto_max_size_KO'], //nombre con 41 caracteres y formato jpg
    ['alumnograduacion', 'alumnograduacion_nombre', 106, 1, 'SEARCH', [{alumnograduacion_nombre:'Nombre'}], true]
];

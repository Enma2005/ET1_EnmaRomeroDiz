
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
    ['alumnograduacion', 'alumnograduacion_login', 1, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_login_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_login', 2, 'Validar que el campo este compuesto por alfabeticos sin ñ ni espacios ni acentos', 'ADD', 'alumnosgraduacion_login_formato_KO', 'No se admiten ni ñ, ni espacios, ni acentos.'],
    ['alumnograduacion', 'alumnograduacion_login', 3, 'Validar que el campo tenga un minimo de 4 caracteres', 'ADD', 'alumnograduacion_login_min_size_KO', 'Mínimo 4 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_login', 4, 'Validar que el campo tenga un maximo de 15 caracteres', 'ADD', 'alumnograduacion_login_max_size_KO', 'Máximo 15 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_login', 5, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],
    
    //PASSWORD
    ['alumnograduacion', 'alumnograduacion_password', 6, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_password_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_password', 7, 'Validar que el campo tenga un minimo de 4 caracteres', 'ADD', 'alumnograduacion_password_min_size_KO', 'Mínimo 8 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_password', 8, 'Validar que el campo tenga un maximo de 15 caracteres', 'ADD', 'alumnograduacion_password_max_size_KO', 'Máximo 100 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_password', 9, 'Validar que el campo no tenga acentos ni ñ', 'ADD', 'alumnograduacion_password_formato_KO', 'No debe contener ni ñ ni acentos.'],
    ['alumnograduacion', 'alumnograduacion_password', 10, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],
    
    //NOMBRE
    ['alumnograduacion', 'alumnograduacion_nombre', 11, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_nombre_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_nombre', 12, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'ADD', 'alumnograduacion_nombre_formato_KO', 'No se admiten caracteres que no sean espacios, ñ o acentos.'],
    ['alumnograduacion', 'alumnograduacion_nombre', 13, 'Validar que el campo tenga un minimo de 2 caracteres', 'ADD', 'alumnograduacion_nombre_min_size_KO', 'Mínimo 2 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_nombre', 14, 'Validar que el campo tenga un maximo de 25 caracteres', 'ADD', 'alumnograduacion_nombre_max_size_KO', 'Máximo 25 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_nombre', 15, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'], 

    //APELLIDOS
    ['alumnograduacion', 'alumnograduacion_apellidos', 16, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_apellidos_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 17, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'ADD', 'alumnograduacion_apellidos_formato_KO', 'No se admiten caracteres que no sean espacios, ñ o acentos.'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 18, 'Validar que el campo tenga un minimo de 2 caracteres', 'ADD', 'alumnograduacion_apellidos_min_size_KO', 'Mínimo 2 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_apellidos', 19, 'Validar que el campo tenga un maximo de 35 caracteres', 'ADD', 'alumnograduacion_apellidos_max_size_KO', 'Máximo 35 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_apellidos', 20, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'], 
    
    //TITULACION
    ['alumnograduacion', 'alumnograduacion_titulacion', 21, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_titulacion_vacio_KO', 'Complete el campo'],
    //HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA LOLOLOLOLOLOLLOLOLOLOLOLOLOLOL??????????????
    ['alumnograduacion', 'alumnograduacion_titulacion', 22, 'Validar que el campoa sea uno de los siguientes terminos: ["GREI","GRIA","MEI","MIA","PCEO"]', 'ADD', 'alumnograduacion_titulacion_formato_KO', 'No se admiten otros valores que no sean ["GREI","GRIA","MEI","MIA","PCEO"].'],
    ['alumnograduacion', 'alumnograduacion_titulacion', 23, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'], 

    //DNI

    ['alumnograduacion', 'alumnograduacion_dni', 24, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_dni_vacio_KO', 'Complete el campo'],
    //HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA LOLOLOLOLOLOLLOLOLOLOLOLOLOLOL??????????????
    ['alumnograduacion', 'alumnograduacion_dni', 25, 'Validar que el campo tenga 8 numero y y una letra valida para los numeros','ADD', 'alumnograduacion_dni_formato_KO', 'El formato debe ser 8 dígitos y una letra mayúscula que corresponda al numero.'],
    ['alumnograduacion', 'alumnograduacion_dni', 26, 'Validar que el campo tenga un maximo de 9 caracteres', 'ADD', 'alumnograduacion_dni_max_size_KO', 'Máximo 9 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_dni', 27, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

    //TELEFONO
    ['alumnograduacion', 'alumnograduacion_telefono', 28, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_telefono_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_telefono', 29, 'Validar que el campo tenga un maximo de 9 caracteres', 'ADD', 'alumnograduacion_telefono_max_size_KO', 'Máximo 9 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_telefono', 30, 'Validar que el campo este compuesto por numeros', 'ADD', 'alumnograduacion_telefono_formato_KO', 'Solo se admiten números.'],
    ['alumnograduacion', 'alumnograduacion_telefono', 31, 'Validar que el campo tenga un minimo de 9 caracteres', 'ADD', 'alumnograduacion_telefono_min_size_KO', 'Mínimo 9 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_telefono', 32, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

    //DIRECCION
    ['alumnograduacion', 'alumnograduacion_direccion', 33, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_direccion_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_direccion', 34, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'ADD', 'alumnograduacion_direccion_formato_KO', 'No se admiten caracteres que no sean espacios, ñ o acentos.'],
    //no especifica el minimo de direccion en el documento lo dejo o quito?
    ['alumnograduacion', 'alumnograduacion_direccion', 35, 'Validar que el campo tenga un minimo de 2 caracteres', 'ADD', 'alumnograduacion_direccion_min_size_KO', 'Mínimo 2 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_direccion', 36, 'Validar que el campo tenga un maximo de 100 caracteres', 'ADD', 'alumnograduacion_direccion_max_size_KO', 'Máximo 100 caracteres.'],   
    ['alumnograduacion', 'alumnograduacion_direccion', 37, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'], 

    //EMAIL
    ['alumnograduacion', 'alumnograduacion_email', 38, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_email_vacio_KO', 'Complete el campo'],
    ['alumnograduacion', 'alumnograduacion_email', 39, 'Validar que el campo tenga un maximo de 40 caracteres', 'ADD', 'alumnograduacion_email_max_size_KO', 'Máximo 40 caracteres.'],   
    //volvemos a lo mismo los minimos los considero o no?
    ['alumnograduacion', 'alumnograduacion_email', 40, 'Validar que el campo este compuesto por un formato de email valido', 'ADD', 'alumnograduacion_email_formato_KO', 'El formato debe ser email válido.'],
    ['alumnograduacion', 'alumnograduacion_email', 41, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],  

    //FOTOACTO
    ['alumnograduacion', 'alumnograduacion_fotoacto', 42, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_fotoacto_vacio_KO', 'Complete el campo'],
    //esto es coherente con lo que pide el documento?
    ['alumnograduacion', 'alumnograduacion_fotoacto', 43, 'Validar que el campo tenga un nombre con solo alfabeticos sin acentos ni ñ ni espacios', 'ADD', 'alumnograduacion_fotoacto_nombrefoto_formato_KO', 'El formato deben ser alfabeticos sin acentos, ñ ni espacios.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 44, 'Validar que el campo tenga un nombre con un minimo de 7 caracteres', 'ADD', 'alumnograduacion_fotoacto_nombrefoto_min_size_KO', 'El nombre debe contener minimo de 7 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 45, 'Validar que el campo tenga un nombre con un maximo de 100 caracteres', 'ADD', 'alumnograduacion_fotoacto_nombrefoto_max_size_KO', 'El nombre debe contener maximo de 100 caracteres.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 46, 'Validar que el campo sea una imagen', 'ADD', 'alumnograduacion_fotoacto_formato_KO', 'El formato debe ser jpg.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 47, 'Validar que el campo no supere el tamaño maximo de 2MB', 'ADD', 'alumnograduacion_fotoacto_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
    ['alumnograduacion', 'alumnograduacion_fotoacto', 48, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],   


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

/*

Las pruebas para tipo file se crearán mediante un array de nombre ‘nombrentidad_tests_files’ que contenga:

la entidad, 
el campo, 
el número de definición de test, 
el número de prueba (secuencial desde 1 hasta el final)
la acción a realizar
// SOBRA el parámetro a probar (max_size_file, type_file, format_name_file)
valor/es de parámetro a probar [[parámetro, valor]]
el código asociado de error/valor true de éxito

*/

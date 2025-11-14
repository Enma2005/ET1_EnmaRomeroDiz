
/*
Las definiciones de tests se crearán, para los campos del formulario, mediante un array de nombre ‘nombreentidad_def_tests’ que contenga:

la entidad, 
el campo, 
elemento de formulario que usa (‘input’, ‘inputfile’, ‘select’, ‘checkbox’,’radio’, ‘textarea’)
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
  ['alumnograduacion', 'alumnograduacion_login', 'input', 1, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_login_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_login', 'input', 2, 'Validar que el campo este compuesto por alfabeticos sin ñ ni espacios ni acentos', 'ADD', 'alumnograduacion_login_format_KO', 'No se admiten ni ñ, ni espacios, ni acentos.'],
  ['alumnograduacion', 'alumnograduacion_login', 'input', 3, 'Validar que el campo tenga un minimo de 4 caracteres', 'ADD', 'alumnograduacion_login_min_size_KO', 'Mínimo 4 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_login', 'input', 4, 'Validar que el campo tenga un maximo de 15 caracteres', 'ADD', 'alumnograduacion_login_max_size_KO', 'Máximo 15 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_login', 'input', 5, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR LOGIN
  ['alumnograduacion', 'alumnograduacion_login', 'input', 6, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_login_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_login', 'input', 7, 'Validar que el campo este compuesto por alfabeticos sin ñ ni espacios ni acentos', 'EDIT', 'alumnograduacion_login_format_KO', 'No se admiten ni ñ, ni espacios, ni acentos.'],
  ['alumnograduacion', 'alumnograduacion_login', 'input', 8, 'Validar que el campo tenga un minimo de 4 caracteres', 'EDIT', 'alumnograduacion_login_min_size_KO', 'Mínimo 4 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_login', 'input', 9, 'Validar que el campo tenga un maximo de 15 caracteres', 'EDIT', 'alumnograduacion_login_max_size_KO', 'Máximo 15 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_login', 'input', 10, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA LOGIN
  ['alumnograduacion', 'alumnograduacion_login', 'input', 11, 'Validar que el campo este vacio o compuesto por alfabeticos sin ñ ni espacios ni acentos ', 'SEARCH', 'alumnograduacion_login_format_KO', 'No se admiten ni ñ, ni espacios, ni acentos.'],
  ['alumnograduacion', 'alumnograduacion_login', 'input', 12, 'Validar que el campo tenga un maximo de 15 caracteres', 'SEARCH', 'alumnograduacion_login_max_size_KO', 'Maximo 15 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_login', 'input', 13, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],



  //PASSWORD

  //ADD PASSWORD
  ['alumnograduacion', 'alumnograduacion_password', 'input', 14, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_password_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_password', 'input', 15, 'Validar que el campo tenga un minimo de 8 caracteres', 'ADD', 'alumnograduacion_password_min_size_KO', 'Mínimo 8 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_password', 'input', 16, 'Validar que el campo tenga un maximo de 64 caracteres', 'ADD', 'alumnograduacion_password_max_size_KO', 'Máximo 64 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_password', 'input', 17, 'Validar que el campo no tenga acentos ni ñ', 'ADD', 'alumnograduacion_password_format_KO', 'No debe contener ni ñ ni acentos.'],
  ['alumnograduacion', 'alumnograduacion_password', 'input', 18, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR PASSWORD
  ['alumnograduacion', 'alumnograduacion_password', 'input', 19, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_password_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_password', 'input', 20, 'Validar que el campo tenga un minimo de 8 caracteres', 'EDIT', 'alumnograduacion_password_min_size_KO', 'Mínimo 8 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_password', 'input', 21, 'Validar que el campo tenga un maximo de 64 caracteres', 'EDIT', 'alumnograduacion_password_max_size_KO', 'Máximo 64 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_password', 'input', 22, 'Validar que el campo no tenga acentos ni ñ', 'EDIT', 'alumnograduacion_password_format_KO', 'No debe contener ni ñ ni acentos.'],
  ['alumnograduacion', 'alumnograduacion_password', 'input', 23, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA PASSWORD
  ['alumnograduacion', 'alumnograduacion_password', 'input', 24, 'Validar que el campo este vacio o compuesto por alfabeticos sin ñ ni espacios ni acentos ', 'SEARCH', 'alumnograduacion_password_format_KO', 'No se admiten ni ñ, ni espacios, ni acentos.'],
  ['alumnograduacion', 'alumnograduacion_password', 'input', 25, 'Validar que el campo tenga un maximo de 64 caracteres', 'SEARCH', 'alumnograduacion_password_max_size_KO', 'Maximo 64 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_password', 'input', 26, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

  //ADD NOMBRE
  ['alumnograduacion', 'alumnograduacion_nombre', 'input', 27, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_nombre_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_nombre', 'input', 28, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'ADD', 'alumnograduacion_nombre_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['alumnograduacion', 'alumnograduacion_nombre', 'input', 29, 'Validar que el campo tenga un minimo de 2 caracteres', 'ADD', 'alumnograduacion_nombre_min_size_KO', 'Mínimo 2 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_nombre', 'input', 30, 'Validar que el campo tenga un maximo de 25 caracteres', 'ADD', 'alumnograduacion_nombre_max_size_KO', 'Máximo 25 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_nombre', 'input', 31, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR NOMBRE
  ['alumnograduacion', 'alumnograduacion_nombre', 'input', 32, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_nombre_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_nombre', 'input', 33, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'EDIT', 'alumnograduacion_nombre_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['alumnograduacion', 'alumnograduacion_nombre', 'input', 34, 'Validar que el campo tenga un minimo de 2 caracteres', 'EDIT', 'alumnograduacion_nombre_min_size_KO', 'Mínimo 2 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_nombre', 'input', 35, 'Validar que el campo tenga un maximo de 25 caracteres', 'EDIT', 'alumnograduacion_nombre_max_size_KO', 'Máximo 25 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_nombre', 'input', 36, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA NOMBRE
  ['alumnograduacion', 'alumnograduacion_nombre', 'input', 37, 'Validar que el campo este vacio o compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'SEARCH', 'alumnograduacion_nombre_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['alumnograduacion', 'alumnograduacion_nombre', 'input', 38, 'Validar que el campo tenga un maximo de 25 caracteres', 'SEARCH', 'alumnograduacion_nombre_max_size_KO', 'Maximo 25 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_nombre', 'input', 39, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

  //ADD APELLIDOS
  ['alumnograduacion', 'alumnograduacion_apellidos', 'input', 40, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_apellidos_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 'input', 41, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'ADD', 'alumnograduacion_apellidos_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 'input', 42, 'Validar que el campo tenga un minimo de 2 caracteres', 'ADD', 'alumnograduacion_apellidos_min_size_KO', 'Mínimo 2 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 'input', 43, 'Validar que el campo tenga un maximo de 35 caracteres', 'ADD', 'alumnograduacion_apellidos_max_size_KO', 'Máximo 35 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 'input', 44, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR APELLIDOS
  ['alumnograduacion', 'alumnograduacion_apellidos', 'input', 45, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_apellidos_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 'input', 46, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'EDIT', 'alumnograduacion_apellidos_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 'input', 47, 'Validar que el campo tenga un minimo de 2 caracteres', 'EDIT', 'alumnograduacion_apellidos_min_size_KO', 'Mínimo 2 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 'input', 48, 'Validar que el campo tenga un maximo de 35 caracteres', 'EDIT', 'alumnograduacion_apellidos_max_size_KO', 'Máximo 35 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 'input', 49, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA APELLIDOS
  ['alumnograduacion', 'alumnograduacion_apellidos', 'input', 50, 'Validar que el campo este vacio o compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'SEARCH', 'alumnograduacion_apellidos_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 'input', 51, 'Validar que el campo tenga un maximo de 35 caracteres', 'SEARCH', 'alumnograduacion_apellidos_max_size_KO', 'Maximo 35 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 'input', 52, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

  //ADD TITULACION
  ['alumnograduacion', 'alumnograduacion_titulacion', 'select', 53, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_titulacion_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_titulacion', 'select', 54, 'Validar que el campoa sea uno de los siguientes terminos: ["GREI","GRIA","MEI","MIA","PCEO"]', 'ADD', 'alumnograduacion_titulacion_format_KO', 'No se admiten otros valores que no sean ["GREI","GRIA","MEI","MIA","PCEO"].'],
  ['alumnograduacion', 'alumnograduacion_titulacion', 'select', 55, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR TITULACION
  ['alumnograduacion', 'alumnograduacion_titulacion', 'select', 56, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_titulacion_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_titulacion', 'select', 57, 'Validar que el campoa sea uno de los siguientes terminos: ["GREI","GRIA","MEI","MIA","PCEO"]', 'EDIT', 'alumnograduacion_titulacion_format_KO', 'No se admiten otros valores que no sean ["GREI","GRIA","MEI","MIA","PCEO"].'],
  ['alumnograduacion', 'alumnograduacion_titulacion', 'select', 58, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA TITULACION
  ['alumnograduacion', 'alumnograduacion_titulacion', 'select', 59, 'Validar que el campo este vacio o sea uno de los siguientes terminos: ["GREI","GRIA","MEI","MIA","PCEO"]', 'SEARCH', 'alumnograduacion_titulacion_format_KO', 'No se admiten otros valores que no sean ["GREI","GRIA","MEI","MIA","PCEO"] o subexpresiones del mismo.'],
  ['alumnograduacion', 'alumnograduacion_titulacion', 'select', 60, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],


  //DNI
  ['alumnograduacion', 'alumnograduacion_dni', 'input', 61, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_dni_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_dni', 'input', 62, 'Validar que el campo tenga 8 numeros y una letra valida para los numeros', 'ADD', 'alumnograduacion_dni_format_KO', 'El format debe ser 8 dígitos y una letra mayúscula que corresponda al numero.'],
  ['alumnograduacion', 'alumnograduacion_dni', 'input', 63, 'Validar que el campo tenga un maximo de 9 caracteres', 'ADD', 'alumnograduacion_dni_max_size_KO', 'Máximo 9 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_dni', 'input', 64, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR DNI
  ['alumnograduacion', 'alumnograduacion_dni', 'input', 65, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_dni_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_dni', 'input', 66, 'Validar que el campo tenga 8 numeros y una letra valida para los numeros', 'EDIT', 'alumnograduacion_dni_format_KO', 'El format debe ser 8 dígitos y una letra mayúscula que corresponda al numero.'],
  ['alumnograduacion', 'alumnograduacion_dni', 'input', 67, 'Validar que el campo tenga un maximo de 9 caracteres', 'EDIT', 'alumnograduacion_dni_max_size_KO', 'Máximo 9 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_dni', 'input', 68, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA DNI
  ['alumnograduacion', 'alumnograduacion_dni', 'input', 69, 'Validar que el campo este vacio o sea un dni completo o una subexpresion', 'SEARCH', 'alumnograduacion_dni_format_KO', 'El format debe ser 8 dígitos y una letra mayúscula que corresponda al numero, una subexpresion del mismo o vacio.'],
  ['alumnograduacion', 'alumnograduacion_dni', 'input', 70, 'Validar que el campo tenga un maximo de 9 caracteres', 'SEARCH', 'alumnograduacion_dni_max_size_KO', 'Maximo 9 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_dni', 'input', 71, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

  //TELEFONO
  ['alumnograduacion', 'alumnograduacion_telefono', 'input', 72, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_telefono_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_telefono', 'input', 73, 'Validar que el campo tenga un maximo de 9 caracteres', 'ADD', 'alumnograduacion_telefono_max_size_KO', 'Máximo 9 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_telefono', 'input', 74, 'Validar que el campo este compuesto por numeros', 'ADD', 'alumnograduacion_telefono_format_KO', 'Solo se admiten números.'],
  ['alumnograduacion', 'alumnograduacion_telefono', 'input', 75, 'Validar que el campo tenga un minimo de 9 caracteres', 'ADD', 'alumnograduacion_telefono_min_size_KO', 'Mínimo 9 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_telefono', 'input', 76, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR TELEFONO
  ['alumnograduacion', 'alumnograduacion_telefono', 'input', 77, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_telefono_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_telefono', 'input', 78, 'Validar que el campo tenga un maximo de 9 caracteres', 'EDIT', 'alumnograduacion_telefono_max_size_KO', 'Máximo 9 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_telefono', 'input', 79, 'Validar que el campo este compuesto por numeros', 'EDIT', 'alumnograduacion_telefono_format_KO', 'Solo se admiten números.'],
  ['alumnograduacion', 'alumnograduacion_telefono', 'input', 80, 'Validar que el campo tenga un minimo de 9 caracteres', 'EDIT', 'alumnograduacion_telefono_min_size_KO', 'Mínimo 9 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_telefono', 'input', 81, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA TELEFONO
  ['alumnograduacion', 'alumnograduacion_telefono', 'input', 82, 'Validar que el campo este vacio o compuesto por numeros', 'SEARCH', 'alumnograduacion_telefono_format_KO', 'Solo se admiten números.'],
  ['alumnograduacion', 'alumnograduacion_telefono', 'input', 83, 'Validar que el campo tenga un maximo de 9 caracteres', 'SEARCH', 'alumnograduacion_telefono_max_size_KO', 'Maximo 9 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_telefono', 'input', 84, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

  //DIRECCION
  ['alumnograduacion', 'alumnograduacion_direccion', 'textarea', 85, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_direccion_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_direccion', 'textarea', 86, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'ADD', 'alumnograduacion_direccion_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['alumnograduacion', 'alumnograduacion_direccion', 'textarea', 87, 'Validar que el campo tenga un minimo de 2 caracteres', 'ADD', 'alumnograduacion_direccion_min_size_KO', 'Mínimo 2 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_direccion', 'textarea', 88, 'Validar que el campo tenga un maximo de 100 caracteres', 'ADD', 'alumnograduacion_direccion_max_size_KO', 'Máximo 100 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_direccion', 'textarea', 89, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR DIRECCION
  ['alumnograduacion', 'alumnograduacion_direccion', 'textarea', 90, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_direccion_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_direccion', 'textarea', 91, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'EDIT', 'alumnograduacion_direccion_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['alumnograduacion', 'alumnograduacion_direccion', 'textarea', 92, 'Validar que el campo tenga un minimo de 2 caracteres', 'EDIT', 'alumnograduacion_direccion_min_size_KO', 'Mínimo 2 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_direccion', 'textarea', 93, 'Validar que el campo tenga un maximo de 100 caracteres', 'EDIT', 'alumnograduacion_direccion_max_size_KO', 'Máximo 100 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_direccion', 'textarea', 94, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA DIRECCION
  ['alumnograduacion', 'alumnograduacion_direccion', 'textarea', 95, 'Validar que el campo este vacio o compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'SEARCH', 'alumnograduacion_direccion_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['alumnograduacion', 'alumnograduacion_direccion', 'textarea', 96, 'Validar que el campo tenga un maximo de 100 caracteres', 'SEARCH', 'alumnograduacion_direccion_max_size_KO', 'Máximo 100 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_direccion', 'textarea', 97, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],
  //CAMBIAR

  //EMAIL
  ['alumnograduacion', 'alumnograduacion_email', 'input', 98, 'Validar que el campo no este vacio', 'ADD', 'alumnograduacion_email_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_email', 'input', 99, 'Validar que el campo tenga un maximo de 40 caracteres', 'ADD', 'alumnograduacion_email_max_size_KO', 'Máximo 40 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_email', 'input', 100, 'Validar que el campo este compuesto por un format de email valido', 'ADD', 'alumnograduacion_email_format_KO', 'El format debe ser email válido.'],
  ['alumnograduacion', 'alumnograduacion_email', 'input', 101, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR EMAIL
  ['alumnograduacion', 'alumnograduacion_email', 'input', 102, 'Validar que el campo no este vacio', 'EDIT', 'alumnograduacion_email_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'alumnograduacion_email', 'input', 103, 'Validar que el campo tenga un maximo de 40 caracteres', 'EDIT', 'alumnograduacion_email_max_size_KO', 'Máximo 40 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_email', 'input', 104, 'Validar que el campo este compuesto por un format de email valido', 'EDIT', 'alumnograduacion_email_format_KO', 'El format debe ser email válido.'],
  ['alumnograduacion', 'alumnograduacion_email', 'input', 105, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA EMAIL
  ['alumnograduacion', 'alumnograduacion_email', 'input', 106, 'Validar que el campo tenga un maximo de 40 caracteres', 'SEARCH', 'alumnograduacion_email_max_size_KO', 'Máximo 40 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_email', 'input', 107, 'Validar que el campo este vacio o compuesto por un format de email valido', 'SEARCH', 'alumnograduacion_email_format_KO', 'El format debe ser email válido.'],
  ['alumnograduacion', 'alumnograduacion_email', 'input', 108, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

  //FOTOACTO
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 109, 'Validar que el campo no este vacio', 'ADD', 'nuevo_alumnograduacion_fotoacto_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 110, 'Validar que el campo tenga un nombre con solo alfabeticos sin acentos ni ñ ni espacios', 'ADD', 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO', 'El format deben ser alfabeticos sin acentos, ñ ni espacios.'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 111, 'Validar que el campo tenga un nombre con un minimo de 7 caracteres', 'ADD', 'nuevo_alumnograduacion_fotoacto_nombrefoto_min_size_KO', 'El nombre debe contener minimo de 7 caracteres.'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 112, 'Validar que el campo tenga un nombre con un maximo de 40 caracteres', 'ADD', 'nuevo_alumnograduacion_fotoacto_nombrefoto_max_size_KO', 'El nombre debe contener maximo de 40 caracteres.'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 113, 'Validar que el campo sea una imagen', 'ADD', 'nuevo_alumnograduacion_fotoacto_format_KO', 'El format debe ser jpg.'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 114, 'Validar que el campo no supere el tamaño maximo de 2MB', 'ADD', 'nuevo_alumnograduacion_fotoacto_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 115, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR FOTOACTO
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 116, 'Validar que el campo no este vacio', 'EDIT', 'nuevo_alumnograduacion_fotoacto_vacio_KO', 'Complete el campo'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 117, 'Validar que el campo tenga un nombre con solo alfabeticos sin acentos ni ñ ni espacios', 'EDIT', 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO', 'El format deben ser alfabeticos sin acentos, ñ ni espacios.'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 118, 'Validar que el campo tenga un nombre con un minimo de 7 caracteres', 'EDIT', 'nuevo_alumnograduacion_fotoacto_nombrefoto_min_size_KO', 'El nombre debe contener minimo de 7 caracteres.'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 119, 'Validar que el campo tenga un nombre con un maximo de 40 caracteres', 'EDIT', 'nuevo_alumnograduacion_fotoacto_nombrefoto_max_size_KO', 'El nombre debe contener maximo de 40 caracteres.'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 120, 'Validar que el campo sea una imagen', 'EDIT', 'nuevo_alumnograduacion_fotoacto_format_KO', 'El format debe ser jpg.'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 121, 'Validar que el campo no supere el tamaño maximo de 2MB', 'EDIT', 'nuevo_alumnograduacion_fotoacto_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 122, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA FOTOACTO
  ['alumnograduacion', 'alumnograduacion_fotoacto', 'input', 123, 'Validar que el campo este vacio o tenga un nombre con solo alfabeticos sin acentos ni ñ ni espacios', 'SEARCH', 'alumnograduacion_fotoacto_nombrefoto_format_KO', 'El format deben ser alfabeticos sin acentos, ñ ni espacios.'],
  ['alumnograduacion', 'alumnograduacion_fotoacto', 'input', 124, 'Validar que el campo tenga un nombre con un maximo de 40 caracteres', 'SEARCH', 'alumnograduacion_fotoacto_nombrefoto_max_size_KO', 'El nombre debe contener maximo de 40 caracteres.'],
  ['alumnograduacion', 'alumnograduacion_fotoacto', 'input', 125, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],


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


  //ADD LOGIN
  ['alumnograduacion', 'alumnograduacion_login', 1, 1, 'ADD', [{ alumnograduacion_login: '' }], 'alumnograduacion_login_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 2, 'ADD', [{ alumnograduacion_login: 'abcñ' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 3, 'ADD', [{ alumnograduacion_login: 'abc def' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 4, 'ADD', [{ alumnograduacion_login: 'acxddgó' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 5, 'ADD', [{ alumnograduacion_login: 'acxddgá' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 6, 'ADD', [{ alumnograduacion_login: 'acéxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 7, 'ADD', [{ alumnograduacion_login: 'acíddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 8, 'ADD', [{ alumnograduacion_login: 'úcxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 9, 'ADD', [{ alumnograduacion_login: 'acxòddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 10, 'ADD', [{ alumnograduacion_login: 'acxddgè' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 11, 'ADD', [{ alumnograduacion_login: 'acxìdg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 12, 'ADD', [{ alumnograduacion_login: 'àcxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 13, 'ADD', [{ alumnograduacion_login: 'aùxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 14, 'ADD', [{ alumnograduacion_login: 'acÜxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 15, 'ADD', [{ alumnograduacion_login: 'acïddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 2, 16, 'ADD', [{ alumnograduacion_login: 'acôddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 3, 17, 'ADD', [{ alumnograduacion_login: 'abc' }], 'alumnograduacion_login_min_size_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 4, 18, 'ADD', [{ alumnograduacion_login: 'abcdefghijklmnoq' }], 'alumnograduacion_login_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 5, 19, 'ADD', [{ alumnograduacion_login: 'usuario' }], true],

  //EDIT LOGIN
  ['alumnograduacion', 'alumnograduacion_login', 6, 20, 'EDIT', [{ alumnograduacion_login: '' }], 'alumnograduacion_login_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 21, 'EDIT', [{ alumnograduacion_login: 'abcñ' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 22, 'EDIT', [{ alumnograduacion_login: 'abc def' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 23, 'EDIT', [{ alumnograduacion_login: 'acxddgó' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 24, 'EDIT', [{ alumnograduacion_login: 'acxddgá' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 25, 'EDIT', [{ alumnograduacion_login: 'acéxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 26, 'EDIT', [{ alumnograduacion_login: 'acíddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 27, 'EDIT', [{ alumnograduacion_login: 'úcxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 28, 'EDIT', [{ alumnograduacion_login: 'acxòddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 29, 'EDIT', [{ alumnograduacion_login: 'acxddgè' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 30, 'EDIT', [{ alumnograduacion_login: 'acxìdg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 31, 'EDIT', [{ alumnograduacion_login: 'àcxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 32, 'EDIT', [{ alumnograduacion_login: 'aùxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 33, 'EDIT', [{ alumnograduacion_login: 'acÜxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 34, 'EDIT', [{ alumnograduacion_login: 'acïddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 7, 35, 'EDIT', [{ alumnograduacion_login: 'acôddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 8, 36, 'EDIT', [{ alumnograduacion_login: 'abc' }], 'alumnograduacion_login_min_size_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 9, 37, 'EDIT', [{ alumnograduacion_login: 'abcdefghijklmnoq' }], 'alumnograduacion_login_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 10, 38, 'EDIT', [{ alumnograduacion_login: 'usuario' }], true],

  //SEARCH LOGIN
  ['alumnograduacion', 'alumnograduacion_login', 11, 39, 'SEARCH', [{ alumnograduacion_login: 'abcñ' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 40, 'SEARCH', [{ alumnograduacion_login: 'abc def' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 41, 'SEARCH', [{ alumnograduacion_login: 'acxddgó' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 42, 'SEARCH', [{ alumnograduacion_login: 'acxddgá' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 43, 'SEARCH', [{ alumnograduacion_login: 'acéxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 44, 'SEARCH', [{ alumnograduacion_login: 'acíddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 45, 'SEARCH', [{ alumnograduacion_login: 'úcxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 46, 'SEARCH', [{ alumnograduacion_login: 'acxòddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 47, 'SEARCH', [{ alumnograduacion_login: 'acxddgè' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 48, 'SEARCH', [{ alumnograduacion_login: 'acxìdg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 49, 'SEARCH', [{ alumnograduacion_login: 'àcxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 50, 'SEARCH', [{ alumnograduacion_login: 'aùxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 51, 'SEARCH', [{ alumnograduacion_login: 'acÜxddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 52, 'SEARCH', [{ alumnograduacion_login: 'acïddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 11, 53, 'SEARCH', [{ alumnograduacion_login: 'acôddg' }], 'alumnograduacion_login_format_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 12, 54, 'SEARCH', [{ alumnograduacion_login: 'abcdefghijklmnoq' }], 'alumnograduacion_login_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_login', 13, 55, 'SEARCH', [{ alumnograduacion_login: 'usuario' }], true],



  //ADD PASSWORD
  ['alumnograduacion', 'alumnograduacion_password', 14, 56, 'ADD', [{ alumnograduacion_password: '' }], 'alumnograduacion_password_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 15, 57, 'ADD', [{ alumnograduacion_password: 'abc1222' }], 'alumnograduacion_password_min_size_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 16, 58, 'ADD', [{ alumnograduacion_password: 'abcdefghijklmnoqrsabcdefghijklmnoqrsabcdefghijklmnoqrsabcdddjwijidiefiefe' }], 'alumnograduacion_password_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 17, 59, 'ADD', [{ alumnograduacion_password: 'abcñdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 17, 60, 'ADD', [{ alumnograduacion_password: 'abcódefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 17, 61, 'ADD', [{ alumnograduacion_password: 'ábcñdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 17, 62, 'ADD', [{ alumnograduacion_password: 'abcñdéfgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 17, 63, 'ADD', [{ alumnograduacion_password: 'abcñdefghí' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 17, 64, 'ADD', [{ alumnograduacion_password: 'abcñdefgú' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 17, 65, 'ADD', [{ alumnograduacion_password: 'àbcñdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 17, 66, 'ADD', [{ alumnograduacion_password: 'abcñdèfgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 17, 67, 'ADD', [{ alumnograduacion_password: 'abcñdefghì' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 17, 68, 'ADD', [{ alumnograduacion_password: 'aòcñdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 17, 69, 'ADD', [{ alumnograduacion_password: 'abcÙdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 17, 70, 'ADD', [{ alumnograduacion_password: 'abôcdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 17, 71, 'ADD', [{ alumnograduacion_password: 'abcüdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 18, 72, 'ADD', [{ alumnograduacion_password: 'password' }], true],

  //EDIT PASSWORD
  ['alumnograduacion', 'alumnograduacion_password', 19, 73, 'EDIT', [{ alumnograduacion_password: '' }], 'alumnograduacion_password_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 20, 74, 'EDIT', [{ alumnograduacion_password: 'abc' }], 'alumnograduacion_password_min_size_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 21, 75, 'EDIT', [{ alumnograduacion_password: 'abcdefghijklmnoqrsabcdefghijklmnoqrsabcdefghijklmnoqrsabcdSDSFFDSAF' }], 'alumnograduacion_password_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 22, 76, 'EDIT', [{ alumnograduacion_password: 'abcñdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 22, 77, 'EDIT', [{ alumnograduacion_password: 'abcódefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 22, 78, 'EDIT', [{ alumnograduacion_password: 'ábcñdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 22, 79, 'EDIT', [{ alumnograduacion_password: 'abcñdéfgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 22, 80, 'EDIT', [{ alumnograduacion_password: 'abcñdefghí' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 22, 81, 'EDIT', [{ alumnograduacion_password: 'abcñdefgú' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 22, 82, 'EDIT', [{ alumnograduacion_password: 'àbcñdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 22, 83, 'EDIT', [{ alumnograduacion_password: 'abcñdèfgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 22, 84, 'EDIT', [{ alumnograduacion_password: 'abcñdefghì' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 22, 85, 'EDIT', [{ alumnograduacion_password: 'aòcñdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 22, 86, 'EDIT', [{ alumnograduacion_password: 'abcÙdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 22, 87, 'EDIT', [{ alumnograduacion_password: 'abôcdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 22, 88, 'EDIT', [{ alumnograduacion_password: 'abcüdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 23, 89, 'EDIT', [{ alumnograduacion_password: 'password' }], true],

  //SEARCH PASSWORD
  ['alumnograduacion', 'alumnograduacion_password', 24, 90, 'SEARCH', [{ alumnograduacion_password: 'abcñdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 24, 91, 'SEARCH', [{ alumnograduacion_password: 'abcódefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 24, 92, 'SEARCH', [{ alumnograduacion_password: 'ábcñdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 24, 93, 'SEARCH', [{ alumnograduacion_password: 'abcñdéfgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 24, 94, 'SEARCH', [{ alumnograduacion_password: 'abcñdefghí' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 24, 95, 'SEARCH', [{ alumnograduacion_password: 'abcñdefgú' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 24, 96, 'SEARCH', [{ alumnograduacion_password: 'àbcñdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 24, 97, 'SEARCH', [{ alumnograduacion_password: 'abcñdèfgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 24, 98, 'SEARCH', [{ alumnograduacion_password: 'abcñdefghì' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 24, 99, 'SEARCH', [{ alumnograduacion_password: 'aòcñdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 24, 100, 'SEARCH', [{ alumnograduacion_password: 'abcÙdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 24, 101, 'SEARCH', [{ alumnograduacion_password: 'abôcdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 24, 102, 'SEARCH', [{ alumnograduacion_password: 'abcüdefgh' }], 'alumnograduacion_password_format_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 25, 103, 'SEARCH', [{ alumnograduacion_password: 'abcdefghijklmnoqrsabcdefghijklmnoqrsabcdefghijklmnoqrsabcdSDSFFDSAF' }], 'alumnograduacion_password_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_password', 26, 104, 'SEARCH', [{ alumnograduacion_password: 'password' }], true],



  //ADD NOMBRE                                
  ['alumnograduacion', 'alumnograduacion_nombre', 27, 105, 'ADD', [{ alumnograduacion_nombre: '' }], 'alumnograduacion_nombre_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 28, 106, 'ADD', [{ alumnograduacion_nombre: 'abc123' }], 'alumnograduacion_nombre_format_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 28, 107, 'ADD', [{ alumnograduacion_nombre: 'ab.sdff' }], 'alumnograduacion_nombre_format_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 28, 108, 'ADD', [{ alumnograduacion_nombre: 'abcsds.' }], 'alumnograduacion_nombre_format_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 28, 109, 'ADD', [{ alumnograduacion_nombre: '(abcsadasf' }], 'alumnograduacion_nombre_format_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 29, 110, 'ADD', [{ alumnograduacion_nombre: 'a' }], 'alumnograduacion_nombre_min_size_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 30, 111, 'ADD', [{ alumnograduacion_nombre: 'abcdefghijklmnoqrsabcdefghijklmnoqrsabcd' }], 'alumnograduacion_nombre_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 31, 112, 'ADD', [{ alumnograduacion_nombre: 'Nombre' }], true],

  //EDIT NOMBRE                                
  ['alumnograduacion', 'alumnograduacion_nombre', 32, 113, 'EDIT', [{ alumnograduacion_nombre: '' }], 'alumnograduacion_nombre_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 33, 114, 'EDIT', [{ alumnograduacion_nombre: 'abc123' }], 'alumnograduacion_nombre_format_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 33, 115, 'EDIT', [{ alumnograduacion_nombre: 'ab.sdff' }], 'alumnograduacion_nombre_format_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 33, 116, 'EDIT', [{ alumnograduacion_nombre: 'abcsds.' }], 'alumnograduacion_nombre_format_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 33, 117, 'EDIT', [{ alumnograduacion_nombre: '(abcsadasf' }], 'alumnograduacion_nombre_format_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 34, 118, 'EDIT', [{ alumnograduacion_nombre: 'a' }], 'alumnograduacion_nombre_min_size_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 35, 119, 'EDIT', [{ alumnograduacion_nombre: 'abcdefghijklmnoqrsabcdefghijklmnoqrsabcd' }], 'alumnograduacion_nombre_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 36, 120, 'EDIT', [{ alumnograduacion_nombre: 'Nombre' }], true],

  //SEARCH NOMBRE
  ['alumnograduacion', 'alumnograduacion_nombre', 37, 121, 'SEARCH', [{ alumnograduacion_nombre: 'abc123' }], 'alumnograduacion_nombre_format_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 37, 122, 'SEARCH', [{ alumnograduacion_nombre: 'ab.sdff' }], 'alumnograduacion_nombre_format_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 37, 123, 'SEARCH', [{ alumnograduacion_nombre: 'abcsds.' }], 'alumnograduacion_nombre_format_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 37, 124, 'SEARCH', [{ alumnograduacion_nombre: '(abcsadasf' }], 'alumnograduacion_nombre_format_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 38, 125, 'SEARCH', [{ alumnograduacion_nombre: 'abcdefghijklmnoqrsabcdefghijklmnoqrsabcd' }], 'alumnograduacion_nombre_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_nombre', 39, 126, 'SEARCH', [{ alumnograduacion_nombre: 'Nombre' }], true],



  //ADD APELLIDOS 
  ['alumnograduacion', 'alumnograduacion_apellidos', 40, 127, 'ADD', [{ alumnograduacion_apellidos: '' }], 'alumnograduacion_apellidos_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 41, 128, 'ADD', [{ alumnograduacion_apellidos: 'abc123' }], 'alumnograduacion_apellidos_format_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 41, 129, 'ADD', [{ alumnograduacion_apellidos: 'abcsad.' }], 'alumnograduacion_apellidos_format_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 41, 130, 'ADD', [{ alumnograduacion_apellidos: 'abc.zsad' }], 'alumnograduacion_apellidos_format_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 41, 131, 'ADD', [{ alumnograduacion_apellidos: '(abcsfa' }], 'alumnograduacion_apellidos_format_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 42, 132, 'ADD', [{ alumnograduacion_apellidos: 'a' }], 'alumnograduacion_apellidos_min_size_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 43, 133, 'ADD', [{ alumnograduacion_apellidos: 'abcdefghijklmnoqrsabcdefghijklmnoqrsabcd' }], 'alumnograduacion_apellidos_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 44, 134, 'ADD', [{ alumnograduacion_apellidos: 'Apellidos' }], true],

  //EDIT APELLIDOS
  ['alumnograduacion', 'alumnograduacion_apellidos', 45, 135, 'EDIT', [{ alumnograduacion_apellidos: '' }], 'alumnograduacion_apellidos_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 46, 136, 'EDIT', [{ alumnograduacion_apellidos: 'abc123' }], 'alumnograduacion_apellidos_format_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 46, 137, 'EDIT', [{ alumnograduacion_apellidos: 'abcsad.' }], 'alumnograduacion_apellidos_format_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 46, 138, 'EDIT', [{ alumnograduacion_apellidos: 'abc.zsad' }], 'alumnograduacion_apellidos_format_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 46, 139, 'EDIT', [{ alumnograduacion_apellidos: '(abcsfa' }], 'alumnograduacion_apellidos_format_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 47, 140, 'EDIT', [{ alumnograduacion_apellidos: 'a' }], 'alumnograduacion_apellidos_min_size_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 48, 141, 'EDIT', [{ alumnograduacion_apellidos: 'abcdefghijklmnoqrsabcdefghijklmnoqrsabcd' }], 'alumnograduacion_apellidos_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 49, 142, 'EDIT', [{ alumnograduacion_apellidos: 'Apellidos' }], true],

  //SEARCH APELLIDOS
  ['alumnograduacion', 'alumnograduacion_apellidos', 50, 143, 'SEARCH', [{ alumnograduacion_apellidos: 'abc123' }], 'alumnograduacion_apellidos_format_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 50, 144, 'SEARCH', [{ alumnograduacion_apellidos: 'abcsad.' }], 'alumnograduacion_apellidos_format_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 50, 145, 'SEARCH', [{ alumnograduacion_apellidos: 'abc.zsad' }], 'alumnograduacion_apellidos_format_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 50, 146, 'SEARCH', [{ alumnograduacion_apellidos: '(abcsfa' }], 'alumnograduacion_apellidos_format_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 51, 147, 'SEARCH', [{ alumnograduacion_apellidos: 'abcdefghijklmnoqrsabcdefghijklmnoqrsabcd' }], 'alumnograduacion_apellidos_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_apellidos', 52, 148, 'SEARCH', [{ alumnograduacion_apellidos: 'Apellidos' }], true],



  //ADD TITULACION            
  ['alumnograduacion', 'alumnograduacion_titulacion', 53, 149, 'ADD', [{ alumnograduacion_titulacion: '' }], 'alumnograduacion_titulacion_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_titulacion', 54, 150, 'ADD', [{ alumnograduacion_titulacion: 'ABC' }], 'alumnograduacion_titulacion_format_KO'],
  ['alumnograduacion', 'alumnograduacion_titulacion', 55, 151, 'ADD', [{ alumnograduacion_titulacion: 'GREI' }], true],

  //EDIT TITULACION            
  ['alumnograduacion', 'alumnograduacion_titulacion', 56, 152, 'EDIT', [{ alumnograduacion_titulacion: '' }], 'alumnograduacion_titulacion_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_titulacion', 57, 153, 'EDIT', [{ alumnograduacion_titulacion: 'ABC' }], 'alumnograduacion_titulacion_format_KO'],
  ['alumnograduacion', 'alumnograduacion_titulacion', 58, 154, 'EDIT', [{ alumnograduacion_titulacion: 'GREI' }], true],

  //SEARCH TITULACION            
  ['alumnograduacion', 'alumnograduacion_titulacion', 59, 155, 'SEARCH', [{ alumnograduacion_titulacion: 'ABC' }], 'alumnograduacion_titulacion_format_KO'],
  ['alumnograduacion', 'alumnograduacion_titulacion', 60, 156, 'SEARCH', [{ alumnograduacion_titulacion: 'GREI' }], true],



  //ADD DNI       
  ['alumnograduacion', 'alumnograduacion_dni', 61, 157, 'ADD', [{ alumnograduacion_dni: '' }], 'alumnograduacion_dni_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_dni', 62, 158, 'ADD', [{ alumnograduacion_dni: '81234567A' }], 'alumnograduacion_dni_format_KO'],
  ['alumnograduacion', 'alumnograduacion_dni', 63, 159, 'ADD', [{ alumnograduacion_dni: '123456789A' }], 'alumnograduacion_dni_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_dni', 64, 160, 'ADD', [{ alumnograduacion_dni: '12345678Z' }], true],

  //EDIT DNI       
  ['alumnograduacion', 'alumnograduacion_dni', 65, 161, 'EDIT', [{ alumnograduacion_dni: '' }], 'alumnograduacion_dni_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_dni', 66, 162, 'EDIT', [{ alumnograduacion_dni: '81234567A' }], 'alumnograduacion_dni_format_KO'],
  ['alumnograduacion', 'alumnograduacion_dni', 67, 163, 'EDIT', [{ alumnograduacion_dni: '123456789A' }], 'alumnograduacion_dni_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_dni', 68, 164, 'EDIT', [{ alumnograduacion_dni: '12345678Z' }], true],

  //SEARCH DNI       
  ['alumnograduacion', 'alumnograduacion_dni', 69, 165, 'SEARCH', [{ alumnograduacion_dni: '81234567A' }], 'alumnograduacion_dni_format_KO'],
  ['alumnograduacion', 'alumnograduacion_dni', 70, 166, 'SEARCH', [{ alumnograduacion_dni: '123456789A' }], 'alumnograduacion_dni_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_dni', 71, 167, 'SEARCH', [{ alumnograduacion_dni: '12345678Z' }], true],



  //ADD TELEFONO
  ['alumnograduacion', 'alumnograduacion_telefono', 72, 168, 'ADD', [{ alumnograduacion_telefono: '' }], 'alumnograduacion_telefono_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 73, 169, 'ADD', [{ alumnograduacion_telefono: '1234567890' }], 'alumnograduacion_telefono_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 74, 170, 'ADD', [{ alumnograduacion_telefono: '12345abcd' }], 'alumnograduacion_telefono_format_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 74, 171, 'ADD', [{ alumnograduacion_telefono: '12345.898' }], 'alumnograduacion_telefono_format_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 74, 172, 'ADD', [{ alumnograduacion_telefono: '12345355.' }], 'alumnograduacion_telefono_format_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 75, 173, 'ADD', [{ alumnograduacion_telefono: '12345678' }], 'alumnograduacion_telefono_min_size_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 76, 174, 'ADD', [{ alumnograduacion_telefono: '123456789' }], true],

  //EDIT TELEFONO
  ['alumnograduacion', 'alumnograduacion_telefono', 77, 175, 'EDIT', [{ alumnograduacion_telefono: '' }], 'alumnograduacion_telefono_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 78, 176, 'EDIT', [{ alumnograduacion_telefono: '1234567890' }], 'alumnograduacion_telefono_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 79, 177, 'EDIT', [{ alumnograduacion_telefono: '12345abcd' }], 'alumnograduacion_telefono_format_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 79, 178, 'EDIT', [{ alumnograduacion_telefono: '12345.898' }], 'alumnograduacion_telefono_format_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 79, 179, 'EDIT', [{ alumnograduacion_telefono: '12345355.' }], 'alumnograduacion_telefono_format_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 80, 180, 'EDIT', [{ alumnograduacion_telefono: '12345678' }], 'alumnograduacion_telefono_min_size_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 81, 181, 'EDIT', [{ alumnograduacion_telefono: '123456789' }], true],

  //SEARCH TELEFONO
  ['alumnograduacion', 'alumnograduacion_telefono', 82, 182, 'SEARCH', [{ alumnograduacion_telefono: '12345abcd' }], 'alumnograduacion_telefono_format_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 82, 183, 'SEARCH', [{ alumnograduacion_telefono: '12345.898' }], 'alumnograduacion_telefono_format_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 82, 184, 'SEARCH', [{ alumnograduacion_telefono: '12345355.' }], 'alumnograduacion_telefono_format_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 83, 185, 'SEARCH', [{ alumnograduacion_telefono: '1234567890' }], 'alumnograduacion_telefono_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_telefono', 84, 186, 'SEARCH', [{ alumnograduacion_telefono: '123456789' }], true],



  //ADD DIRECCION
  ['alumnograduacion', 'alumnograduacion_direccion', 85, 187, 'ADD', [{ alumnograduacion_direccion: '' }], 'alumnograduacion_direccion_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_direccion', 86, 188, 'ADD', [{ alumnograduacion_direccion: 'aiooieef*sd' }], 'alumnograduacion_direccion_format_KO'],
  ['alumnograduacion', 'alumnograduacion_direccion', 87, 189, 'ADD', [{ alumnograduacion_direccion: 'a' }], 'alumnograduacion_direccion_min_size_KO'],
  ['alumnograduacion', 'alumnograduacion_direccion', 88, 190, 'ADD', [{ alumnograduacion_direccion: 'abcdefghhjgfghdhfdfdfdgdfhfdfhdhfdhfijklmnoqrsabcdefghijklmnoqrsabcdugyjgghbhjhjhcfhhghjggjhfghffjgfjhhfffgfhfhdrsg' }], 'alumnograduacion_direccion_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_direccion', 89, 191, 'ADD', [{ alumnograduacion_direccion: 'Direccion 123' }], true],

  //EDIT DIRECCION
  ['alumnograduacion', 'alumnograduacion_direccion', 90, 192, 'EDIT', [{ alumnograduacion_direccion: '' }], 'alumnograduacion_direccion_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_direccion', 91, 193, 'EDIT', [{ alumnograduacion_direccion: 'abc*qfd323' }], 'alumnograduacion_direccion_format_KO'],
  ['alumnograduacion', 'alumnograduacion_direccion', 92, 194, 'EDIT', [{ alumnograduacion_direccion: 'a' }], 'alumnograduacion_direccion_min_size_KO'],
  ['alumnograduacion', 'alumnograduacion_direccion', 93, 195, 'EDIT', [{ alumnograduacion_direccion: 'abcdefghijklmnoqrsabcdefghijklmnoqrsabcdabcdefghijklmnoqrsabcdefghijklmnoqrsabcdabcdefghijklmnoqrsabcdefghijklm' }], 'alumnograduacion_direccion_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_direccion', 94, 196, 'EDIT', [{ alumnograduacion_direccion: 'Direccion 123' }], true],

  //SEARCH DIRECCION
  ['alumnograduacion', 'alumnograduacion_direccion', 95, 197, 'SEARCH', [{ alumnograduacion_direccion: 'abc*qfd323' }], 'alumnograduacion_direccion_format_KO'],
  ['alumnograduacion', 'alumnograduacion_direccion', 96, 198, 'SEARCH', [{ alumnograduacion_direccion: 'abcdefghijklmnoqrsabcdefghijklmnoqrsabcdabcdefghijklmnoqrsabcdefghijklmnoqrsabcdabcdefghijklmnoqrsabcdefghijklm' }], 'alumnograduacion_direccion_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_direccion', 97, 199, 'SEARCH', [{ alumnograduacion_direccion: 'Direccion 123' }], true],



  //ADD EMAIL
  ['alumnograduacion', 'alumnograduacion_email', 98, 200, 'ADD', [{ alumnograduacion_email: '' }], 'alumnograduacion_email_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 99, 201, 'ADD', [{ alumnograduacion_email: 'a'.repeat(41) + '@gmail.com' }], 'alumnograduacion_email_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 100, 202, 'ADD', [{ alumnograduacion_email: 'emailformatKO' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 100, 203, 'ADD', [{ alumnograduacion_email: 'ndjdndfbsfks' + '  ' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 100, 204, 'ADD', [{ alumnograduacion_email: ' ' + '@gmail.com' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 100, 205, 'ADD', [{ alumnograduacion_email: 'sdfsd #' + '@gmail.com' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 100, 206, 'ADD', [{ alumnograduacion_email: ' sdfs#df' + '@gmail.com' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 100, 207, 'ADD', [{ alumnograduacion_email: ' sf # sfsd' + '@gmail.com' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 101, 208, 'ADD', [{ alumnograduacion_email: 'sdasjaisjaj@gmail.com' }], true],

  //EDIT EMAIL
  ['alumnograduacion', 'alumnograduacion_email', 102, 209, 'EDIT', [{ alumnograduacion_email: '' }], 'alumnograduacion_email_vacio_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 103, 210, 'EDIT', [{ alumnograduacion_email: 'a'.repeat(41) + '@gmail.com' }], 'alumnograduacion_email_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 104, 211, 'EDIT', [{ alumnograduacion_email: 'emailformatKO' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 104, 212, 'EDIT', [{ alumnograduacion_email: 'ndjdndfbsfks' + '  ' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 104, 213, 'EDIT', [{ alumnograduacion_email: ' ' + '@gmail.com' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 104, 214, 'EDIT', [{ alumnograduacion_email: 'sdfsd  #' + '@gmail.com' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 104, 215, 'EDIT', [{ alumnograduacion_email: ' sdfsdf#' + '@gmail.com' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 104, 216, 'EDIT', [{ alumnograduacion_email: ' sf sf#sd' + '@gmail.com' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 105, 217, 'EDIT', [{ alumnograduacion_email: 'sdasjaisjaj@gmail.com' }], true],

  //SEARCH EMAIL
  ['alumnograduacion', 'alumnograduacion_email', 106, 218, 'SEARCH', [{ alumnograduacion_email: 'a'.repeat(41) + '@gmail.com' }], 'alumnograduacion_email_max_size_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 107, 219, 'SEARCH', [{ alumnograduacion_email: 'emailformatKO&' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 107, 220, 'SEARCH', [{ alumnograduacion_email: 'ndjdndfbsfks' + '  ' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 107, 221, 'SEARCH', [{ alumnograduacion_email: ' ' + '@gmail.com' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 107, 222, 'SEARCH', [{ alumnograduacion_email: 'sdfsd# ' + '@gmail.com' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 107, 223, 'SEARCH', [{ alumnograduacion_email: ' #sdfsdf' + '@gmail.com' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 107, 224, 'SEARCH', [{ alumnograduacion_email: ' sf#  sfsd' + '@gmail.com' }], 'alumnograduacion_email_format_KO'],
  ['alumnograduacion', 'alumnograduacion_email', 108, 225, 'SEARCH', [{ alumnograduacion_email: 'sdasjaisjaj@gmail.com' }], true],

  //BUSCAR FOTOACTO
  ['alumnograduacion', 'alumnograduacion_fotoacto', 123, 23, 'SEARCH', [{ alumnograduacion_fotoacto: 'nombre con espacios.jpg' }], 'alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format pdf
  ['alumnograduacion', 'alumnograduacion_fotoacto', 123, 24, 'SEARCH', [{ alumnograduacion_fotoacto: 'nombreconñ.jpg' }], 'alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format pdf
  ['alumnograduacion', 'alumnograduacion_fotoacto', 123, 25, 'SEARCH', [{ alumnograduacion_fotoacto: 'nombró.jpg' }], 'alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format jpg
  ['alumnograduacion', 'alumnograduacion_fotoacto', 123, 26, 'SEARCH', [{ alumnograduacion_fotoacto: 'nombreúespacios.jpg' }], 'alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format jpg
  ['alumnograduacion', 'alumnograduacion_fotoacto', 123, 27, 'SEARCH', [{ alumnograduacion_fotoacto: 'Ámbreespacios.jpg' }], 'alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format jpg
  ['alumnograduacion', 'alumnograduacion_fotoacto', 124, 28, 'SEARCH', [{ alumnograduacion_fotoacto: 'n'.repeat(41) + '.jpg' }], 'alumnograduacion_fotoacto_nombrefoto_max_size_KO'], //nombre con 41 caracteres y format jpg
  ['alumnograduacion', 'alumnograduacion_fotoacto', 125, 29, 'SEARCH', [{ alumnograduacion_fotoacto: 'nombrecorrecto.jpg' }], true]

];

/*

Las pruebas para tipo file se crearán mediante un array de nombre ‘nombrentidad_tests_files’ que contenga:

la entidad, 
el campo, 
el número de definición de test, 
el número de prueba (secuencial desde 22 hasta el final)
la acción a realizar
// SOBRA el parámetro a probar (max_size_file, type_file, format_name_file)
// valor/es de parámetro a probar [[parámetro, valor]] el código asociado de error/valor true de éxito

*/

let alumnograduacion_tests_files = [
  //FOTOACTO

  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 109, 1, 'ADD', 'existe', [], 'nuevo_alumnograduacion_fotoacto_vacio_KO'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 110, 2, 'ADD', 'format_name_file', [{ format_name_file: 'nombre con espacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format pdf
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 110, 3, 'ADD', 'format_name_file', [{ format_name_file: 'nombreconñ.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format jpg
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 110, 4, 'ADD', 'format_name_file', [{ format_name_file: 'nombró.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format jpg
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 110, 5, 'ADD', 'format_name_file', [{ format_name_file: 'nombreúespacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format jpg
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 110, 6, 'ADD', 'format_name_file', [{ format_name_file: 'Ámbreespacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format jpg
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 111, 7, 'ADD', 'format_name_file', [{ format_name_file: 'j.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_min_size_KO'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 112, 8, 'ADD', 'format_name_file', [{ format_name_file: 'n'.repeat(41) + '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_max_size_KO'], //nombre con 41 caracteres y format jpg
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 113, 9, 'ADD', 'type_file', [{ format_name_file: 'foto.pdf' }, { type_file: 'pdf' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_format_KO'], //format jpg
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 114, 10, 'ADD', 'max_size_file', [{ format_name_file: 'fomkjskdkto.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 21000000 }], 'nuevo_alumnograduacion_fotoacto_max_size_KO'], //20MB
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 115, 11, 'ADD', 'correcto', [{ format_name_file: 'nombrecorrecto.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], true], //correcto 

  //EDITAR FOTOACTO
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 116, 12, 'EDIT', 'existe', [], 'nuevo_alumnograduacion_fotoacto_vacio_KO'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 117, 13, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre con espacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format pdf
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 117, 14, 'EDIT', 'format_name_file', [{ format_name_file: 'nombreconñ.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format pdf
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 117, 15, 'EDIT', 'format_name_file', [{ format_name_file: 'nombró.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format jpg
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 117, 16, 'EDIT', 'format_name_file', [{ format_name_file: 'nombreúespacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format jpg
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 117, 17, 'EDIT', 'format_name_file', [{ format_name_file: 'Ámbreespacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO'], //nombre con espacios y format jpg
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 118, 18, 'EDIT', 'format_name_file', [{ format_name_file: 'n.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_min_size_KO'],
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 119, 19, 'EDIT', 'format_name_file', [{ format_name_file: 'n'.repeat(41) + '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_nombrefoto_max_size_KO'], //nombre con 41 caracteres y format jpg
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 120, 20, 'EDIT', 'type_file', [ { format_name_file: 'foto.pdf' }, { type_file: 'pdf' }, { max_size_file: 19 }], 'nuevo_alumnograduacion_fotoacto_format_KO'], //format jpg
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 121, 21, 'EDIT', 'max_size_file', [{ format_name_file: 'foto.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 21000000 }], 'nuevo_alumnograduacion_fotoacto_max_size_KO'], //20MB
  ['alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 122, 22, 'EDIT', 'correcto', [{ format_name_file: 'nombrecorrecto.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 19 }], true], //correcto 

];



















//ARTICULO-----------------------------------------------------------------------------














/*
Las definiciones de tests se crearán, para los campos del formulario, mediante un array de nombre ‘nombreentidad_def_tests’ que contenga:

la entidad, 
el campo, 
elemento de formulario que usa (‘input’, ‘inputfile’, ‘select’, ‘checkbox’,’radio’, ‘textarea’)
el número de definición de test (secuencial desde 1 hasta el final)
la descripción del test 
la acción a realizar
el resultado esperado para este test (boolean/string)
el mensaje de respuesta asociado al resultado. (en el mismo idioma para todos los tests)
*/


let articulo_def_tests = [


  ['articulo', 'FechaPublicacionR', 'input', 1, 'Validar que el campo esté vacío.', 'ADD', 'FechaPublicacionR_vacio_KO', 'La fecha de publicación no puede estar vacía.'],
  ['articulo', 'FechaPublicacionR', 'input', 2, 'Validar que el formato de la fecha sea incorrecto (no cumple YYYY-MM-DD).', 'ADD', 'FechaPublicacionR_format_KO', 'El formato de la fecha debe ser YYYY-MM-DD.'],
  ['articulo', 'FechaPublicacionR', 'input', 3, 'Validar que la fecha sea posterior a la actual.', 'ADD', 'FechaPublicacionR_superiorActual_KO', 'La fecha de publicación no puede ser posterior a la fecha actual.'],
  ['articulo', 'FechaPublicacionR', 'input', 4, 'Validar que la fecha sea correcta.', 'ADD', 'FechaPublicacionR_correcto_OK', 'Fecha de publicación válida.'],

  // ---------- EDIT ----------
  ['articulo', 'FechaPublicacionR', 'input', 5, 'Validar que el campo esté vacío.', 'EDIT', 'FechaPublicacionR_vacio_KO', 'La fecha de publicación no puede estar vacía.'],
  ['articulo', 'FechaPublicacionR', 'input', 6, 'Validar que el formato de la fecha sea incorrecto (no cumple YYYY-MM-DD).', 'EDIT', 'FechaPublicacionR_format_KO', 'El formato de la fecha debe ser YYYY-MM-DD.'],
  ['articulo', 'FechaPublicacionR', 'input', 7, 'Validar que la fecha sea posterior a la actual.', 'EDIT', 'FechaPublicacionR_superiorActual_KO', 'La fecha de publicación no puede ser posterior a la fecha actual.'],
  ['articulo', 'FechaPublicacionR', 'input', 8, 'Validar que la fecha sea correcta.', 'EDIT', 'FechaPublicacionR_correcto_OK', 'Fecha de publicación válida.'],

  // ---------- SEARCH ----------
  ['articulo', 'FechaPublicacionR', 'input', 9, 'Validar que el campo esté vacío (permitido en búsqueda).', 'SEARCH', 'FechaPublicacionR_vacio_OK', 'Campo vacío permitido en búsqueda.'],
  ['articulo', 'FechaPublicacionR', 'input', 10, 'Validar que el formato de la fecha sea incorrecto (no cumple YYYY-MM-DD).', 'SEARCH', 'FechaPublicacionR_format_KO', 'El formato de la fecha debe ser YYYY-MM-DD.'],
  ['articulo', 'FechaPublicacionR', 'input', 11, 'Validar que la fecha sea correcta.', 'SEARCH', 'FechaPublicacionR_correcto_OK', 'Fecha de publicación válida.'],


  //BUSQUEDA CodigoA
  ['articulo', 'CodigoA', 'input', 12, 'Validar que el campo este vacio o compuesto por números ', 'SEARCH', 'CodigoA_format_KO', 'Solo se admiten números.'],
  ['articulo', 'CodigoA', 'input', 13, 'Validar que el campo tenga un maximo de 11 caracteres', 'SEARCH', 'CodigoA_max_size_KO', 'Maximo 11 caracteres.'],
  ['articulo', 'CodigoA', 'input', 14, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

  //AutoresA

  //ADD AutoresA
  ['articulo', 'AutoresA', 'input', 15, 'Validar que el campo no este vacio', 'ADD', 'AutoresA_vacio_KO', 'Complete el campo'],
  ['articulo', 'AutoresA', 'input', 16, 'Validar que el campo tenga un minimo de 4 caracteres', 'ADD', 'AutoresA_min_size_KO', 'Mínimo 4 caracteres.'],
  ['articulo', 'AutoresA', 'input', 17, 'Validar que el campo tenga un maximo de 200 caracteres', 'ADD', 'AutoresA_max_size_KO', 'Máximo 200 caracteres.'],
  ['articulo', 'AutoresA', 'input', 18, 'Validar que el campo no tenga numeros', 'ADD', 'AutoresA_format_KO', 'No debe contener números.'],
  ['articulo', 'AutoresA', 'input', 19, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR AutoresA
  ['articulo', 'AutoresA', 'input', 20, 'Validar que el campo no este vacio', 'EDIT', 'AutoresA_vacio_KO', 'Complete el campo'],
  ['articulo', 'AutoresA', 'input', 21, 'Validar que el campo tenga un minimo de 4 caracteres', 'EDIT', 'AutoresA_min_size_KO', 'Mínimo 4 caracteres.'],
  ['articulo', 'AutoresA', 'input', 22, 'Validar que el campo tenga un maximo de 200 caracteres', 'EDIT', 'AutoresA_max_size_KO', 'Máximo 200 caracteres.'],
  ['articulo', 'AutoresA', 'input', 23, 'Validar que el campo no tenga numeros', 'EDIT', 'AutoresA_format_KO', 'No debe contener números.'],
  ['articulo', 'AutoresA', 'input', 24, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA AutoresA
  ['articulo', 'AutoresA', 'input', 25, 'Validar que el campo este vacio o compuesto por alfabeticos sin ñ ni espacios ni acentos ', 'SEARCH', 'AutoresA_format_KO', 'No se admiten ni ñ, ni espacios, ni acentos.'],
  ['articulo', 'AutoresA', 'input', 26, 'Validar que el campo tenga un maximo de 200 caracteres', 'SEARCH', 'AutoresA_max_size_KO', 'Maximo 200 caracteres.'],
  ['articulo', 'AutoresA', 'input', 27, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],


  //ADD TituloA
  ['articulo', 'TituloA', 'input', 28, 'Validar que el campo no este vacio', 'ADD', 'TituloA_vacio_KO', 'Complete el campo'],
  ['articulo', 'TituloA', 'input', 29, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'ADD', 'TituloA_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['articulo', 'TituloA', 'input', 30, 'Validar que el campo tenga un minimo de 2 caracteres', 'ADD', 'TituloA_min_size_KO', 'Mínimo 2 caracteres.'],
  ['articulo', 'TituloA', 'input', 31, 'Validar que el campo tenga un maximo de 100 caracteres', 'ADD', 'TituloA_max_size_KO', 'Máximo 100 caracteres.'],
  ['articulo', 'TituloA', 'input', 32, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR TituloA
  ['articulo', 'TituloA', 'input', 33, 'Validar que el campo no este vacio', 'EDIT', 'TituloA_vacio_KO', 'Complete el campo'],
  ['articulo', 'TituloA', 'input', 34, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'EDIT', 'TituloA_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['articulo', 'TituloA', 'input', 35, 'Validar que el campo tenga un minimo de 2 caracteres', 'EDIT', 'TituloA_min_size_KO', 'Mínimo 2 caracteres.'],
  ['articulo', 'TituloA', 'input', 36, 'Validar que el campo tenga un maximo de 100 caracteres', 'EDIT', 'TituloA_max_size_KO', 'Máximo 100 caracteres.'],
  ['articulo', 'TituloA', 'input', 37, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA TituloA
  ['articulo', 'TituloA', 'input', 38, 'Validar que el campo este vacio o compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'SEARCH', 'TituloA_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['articulo', 'TituloA', 'input', 39, 'Validar que el campo tenga un maximo de 100 caracteres', 'SEARCH', 'TituloA_max_size_KO', 'Maximo 100 caracteres.'],
  ['articulo', 'TituloA', 'input', 40, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

  //ADD TituloR
  ['articulo', 'TituloR', 'input', 41, 'Validar que el campo no este vacio', 'ADD', 'TituloR_vacio_KO', 'Complete el campo'],
  ['articulo', 'TituloR', 'input', 42, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'ADD', 'TituloR_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['articulo', 'TituloR', 'input', 43, 'Validar que el campo tenga un minimo de 2 caracteres', 'ADD', 'TituloR_min_size_KO', 'Mínimo 2 caracteres.'],
  ['articulo', 'TituloR', 'input', 44, 'Validar que el campo tenga un maximo de 100 caracteres', 'ADD', 'TituloR_max_size_KO', 'Máximo 100 caracteres.'],
  ['articulo', 'TituloR', 'input', 45, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR TituloR
  ['articulo', 'TituloR', 'input', 46, 'Validar que el campo no este vacio', 'EDIT', 'TituloR_vacio_KO', 'Complete el campo'],
  ['articulo', 'TituloR', 'input', 47, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'EDIT', 'TituloR_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['articulo', 'TituloR', 'input', 48, 'Validar que el campo tenga un minimo de 2 caracteres', 'EDIT', 'TituloR_min_size_KO', 'Mínimo 2 caracteres.'],
  ['articulo', 'TituloR', 'input', 49, 'Validar que el campo tenga un maximo de 100 caracteres', 'EDIT', 'TituloR_max_size_KO', 'Máximo 100 caracteres.'],
  ['articulo', 'TituloR', 'input', 50, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA TituloR
  ['articulo', 'TituloR', 'input', 51, 'Validar que el campo este vacio o compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'SEARCH', 'TituloR_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
  ['articulo', 'TituloR', 'input', 52, 'Validar que el campo tenga un maximo de 100 caracteres', 'SEARCH', 'TituloR_max_size_KO', 'Maximo 100 caracteres.'],
  ['articulo', 'TituloR', 'input', 53, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

  //ADD EstadoA
  ['articulo', 'EstadoA', 'select', 54, 'Validar que el campo no este vacio', 'ADD', 'EstadoA_vacio_KO', 'Complete el campo'],
  ['articulo', 'EstadoA', 'select', 55, 'Validar que el campoa sea uno de los siguientes terminos: [Enviado,Revision,Publicado]', 'ADD', 'EstadoA_format_KO', 'No se admiten otros valores que no sean [Enviado,Revision,Publicado].'],
  ['articulo', 'EstadoA', 'select', 56, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR EstadoA
  ['articulo', 'EstadoA', 'select', 57, 'Validar que el campo no este vacio', 'EDIT', 'EstadoA_vacio_KO', 'Complete el campo'],
  ['articulo', 'EstadoA', 'select', 58, 'Validar que el campoa sea uno de los siguientes terminos: [Enviado,Revision,Publicado]', 'EDIT', 'EstadoA_format_KO', 'No se admiten otros valores que no sean [Enviado,Revision,Publicado].'],
  ['articulo', 'EstadoA', 'select', 59, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA EstadoA
  ['articulo', 'EstadoA', 'select', 60, 'Validar que el campo este vacio o sea uno de los siguientes terminos: [Enviado,Revision,Publicado]', 'SEARCH', 'EstadoA_format_KO', 'No se admiten otros valores que no sean [Enviado,Revision,Publicado] o subexpresiones del mismo.'],
  ['articulo', 'EstadoA', 'select', 61, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],


  //ISSN
  ['articulo', 'ISSN', 'input', 62, 'Validar que el campo no este vacio', 'ADD', 'ISSN_vacio_KO', 'Complete el campo'],
  ['articulo', 'ISSN', 'input', 63, 'Validar que el campo tenga 8 numeros separados de 4 en 4 por un guion y cuyo ultimo digito pueda ser una letra X', 'ADD', 'ISSN_format_KO', 'El format debe ser 8 dígitos o 7 digitos y una letra X mayúscula que corresponda al numero anterior.'],
  ['articulo', 'ISSN', 'input', 64, 'Validar que el campo tenga un maximo y minimo de 9 caracteres', 'ADD', 'ISSN_max_size_KO', 'Máximo y mínimo 9 caracteres.'],
  ['articulo', 'ISSN', 'input', 65, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR ISSN
  ['articulo', 'ISSN', 'input', 66, 'Validar que el campo no este vacio', 'EDIT', 'ISSN_vacio_KO', 'Complete el campo'],
  ['articulo', 'ISSN', 'input', 67, 'Validar que el campo tenga 8 numeros separados de 4 en 4 por un guion y cuyo ultimo digito pueda ser una letra X', 'EDIT', 'ISSN_format_KO', 'El format debe ser 8 dígitos o 7 digitos y una letra X mayúscula que corresponda al numero anterior.'],
  ['articulo', 'ISSN', 'input', 68, 'Validar que el campo tenga un maximo y minimo de 9 caracteres', 'EDIT', 'ISSN_max_size_KO', 'Máximo y mínimo 9 caracteres.'],
  ['articulo', 'ISSN', 'input', 69, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA ISSN
  ['articulo', 'ISSN', 'input', 70, 'Validar que el campo este vacio o sea un ISSN completo o una subexpresion', 'SEARCH', 'ISSN_format_KO', 'El format debe ser 8 dígitos y una letra mayúscula que corresponda al numero, una subexpresion del mismo o vacio.'],
  ['articulo', 'ISSN', 'input', 71, 'Validar que el campo tenga un maximo y minimo de 9 caracteres', 'SEARCH', 'ISSN_max_size_KO', 'Maximo 9 caracteres.'],
  ['articulo', 'ISSN', 'input', 72, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

  //VolumenR
  ['articulo', 'VolumenR', 'input', 73, 'Validar que el campo no este vacio', 'ADD', 'VolumenR_vacio_KO', 'Complete el campo'],
  ['articulo', 'VolumenR', 'input', 74, 'Validar que el campo tenga un máximo de 4 caracteres', 'ADD', 'VolumenR_max_size_KO', 'Máximo 4 caracteres.'],
  ['articulo', 'VolumenR', 'input', 75, 'Validar que el campo este compuesto por numeros', 'ADD', 'VolumenR_format_KO', 'Solo se admiten números.'],
  ['articulo', 'VolumenR', 'input', 76, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR VolumenR
  ['articulo', 'VolumenR', 'input', 77, 'Validar que el campo no este vacio', 'EDIT', 'VolumenR_vacio_KO', 'Complete el campo'],
  ['articulo', 'VolumenR', 'input', 78, 'Validar que el campo tenga un máximo de 4 caracteres', 'EDIT', 'VolumenR_max_size_KO', 'Máximo 4 caracteres.'],
  ['articulo', 'VolumenR', 'input', 79, 'Validar que el campo este compuesto por numeros', 'EDIT', 'VolumenR_format_KO', 'Solo se admiten números.'],
  ['articulo', 'VolumenR', 'input', 80, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA VolumenR
  ['articulo', 'VolumenR', 'input', 81, 'Validar que el campo este vacio o compuesto por numeros', 'SEARCH', 'VolumenR_format_KO', 'Solo se admiten números.'],
  ['articulo', 'VolumenR', 'input', 82, 'Validar que el campo tenga un máximo de 4 caracteres', 'SEARCH', 'VolumenR_max_size_KO', 'Maximo 4 caracteres.'],
  ['articulo', 'VolumenR', 'input', 83, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],


  //PagIniA
  ['articulo', 'PagIniA', 'input', 84, 'Validar que el campo no este vacio', 'ADD', 'PagIniA_vacio_KO', 'Complete el campo'],
  ['articulo', 'PagIniA', 'input', 85, 'Validar que el campo este compuesto por numeros', 'ADD', 'PagIniA_format_KO', 'No se admiten caracteres que no números.'],
  ['articulo', 'PagIniA', 'input', 86, 'Validar que el campo tenga un maximo de 4 caracteres', 'ADD', 'PagIniA_max_size_KO', 'Máximo 4 caracteres.'],
  ['articulo', 'PagIniA', 'input', 87, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR PagIniA
  ['articulo', 'PagIniA', 'input', 88, 'Validar que el campo no este vacio', 'EDIT', 'PagIniA_vacio_KO', 'Complete el campo'],
  ['articulo', 'PagIniA', 'input', 89, 'Validar que el campo este compuesto por numeros', 'EDIT', 'PagIniA_format_KO', 'No se admiten caracteres que no números.'],
  ['articulo', 'PagIniA', 'input', 90, 'Validar que el campo tenga un maximo de 4 caracteres', 'EDIT', 'PagIniA_max_size_KO', 'Máximo 4 caracteres.'],
  ['articulo', 'PagIniA', 'input', 91, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA PagIniA
  ['articulo', 'PagIniA', 'input', 92, 'Validar que el campo este vacio o compuesto por numeros', 'SEARCH', 'PagIniA_format_KO', 'No se admiten caracteres que no números.'],
  ['articulo', 'PagIniA', 'input', 93, 'Validar que el campo tenga un maximo de 4 caracteres', 'SEARCH', 'PagIniA_max_size_KO', 'Máximo 4 caracteres.'],
  ['articulo', 'PagIniA', 'input', 94, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

  //PagFinA
  ['articulo', 'PagFinA', 'input', 95, 'Validar que el campo no este vacio', 'ADD', 'PagFinA_vacio_KO', 'Complete el campo'],
  ['articulo', 'PagFinA', 'input', 96, 'Validar que el campo este compuesto por numeros', 'ADD', 'PagFinA_format_KO', 'No se admiten caracteres que no números.'],
  ['articulo', 'PagFinA', 'input', 97, 'Validar que el campo tenga un maximo de 4 caracteres', 'ADD', 'PagFinA_max_size_KO', 'Máximo 4 caracteres.'],
  ['articulo', 'PagFinA', 'input', 98, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR PagFinA
  ['articulo', 'PagFinA', 'input', 99, 'Validar que el campo no este vacio', 'EDIT', 'PagFinA_vacio_KO', 'Complete el campo'],
  ['articulo', 'PagFinA', 'input', 100, 'Validar que el campo este compuesto por numeros', 'EDIT', 'PagFinA_format_KO', 'No se admiten caracteres que no números.'],
  ['articulo', 'PagFinA', 'input', 101, 'Validar que el campo tenga un maximo de 4 caracteres', 'EDIT', 'PagFinA_max_size_KO', 'Máximo 4 caracteres.'],
  ['articulo', 'PagFinA', 'input', 102, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA PagFinA
  ['articulo', 'PagFinA', 'input', 103, 'Validar que el campo este vacio o compuesto por numeros', 'SEARCH', 'PagFinA_format_KO', 'No se admiten caracteres que no números.'],
  ['articulo', 'PagFinA', 'input', 104, 'Validar que el campo tenga un maximo de 4 caracteres', 'SEARCH', 'PagFinA_max_size_KO', 'Máximo 4 caracteres.'],
  ['articulo', 'PagFinA', 'input', 105, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

  //ADD FicheropdfA
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 106, 'Validar que el campo no este vacio', 'ADD', 'nuevo_FicheropdfA_vacio_KO', 'Complete el campo'],
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 107, 'Validar que el campo tenga un nombre con solo alfabeticos sin espacios ni puntos antes de la extension', 'ADD', 'nuevo_FicheropdfA_nombrepdf_format_KO', 'El format deben ser alfabeticos sin espacios'],
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 108, 'Validar que el campo tenga un nombre con un minimo de 1 caracter mas la extension (total 5)', 'ADD', 'nuevo_FicheropdfA_nombrepdf_min_size_KO', 'El nombre debe contener minimo de 1 caracter mas la extension (total 4).'],
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 109, 'Validar que el campo tenga un nombre con un maximo de 20 caracteres', 'ADD', 'nuevo_FicheropdfA_nombrepdf_max_size_KO', 'El nombre debe contener maximo de 20 caracteres.'],
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 110, 'Validar que el campo sea un pdf', 'ADD', 'nuevo_FicheropdfA_format_KO', 'El format debe ser pdf.'],
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 111, 'Validar que el campo no supere el tamaño maximo de 2MB', 'ADD', 'nuevo_FicheropdfA_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 112, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

  //EDITAR FicheropdfA
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 113, 'Validar que el campo no este vacio', 'EDIT', 'nuevo_FicheropdfA_vacio_KO', 'Complete el campo'],
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 114, 'Validar que el campo tenga un nombre con solo alfabeticos sin espacios ni puntos antes de la extension', 'EDIT', 'nuevo_FicheropdfA_nombrepdf_format_KO', 'El format deben ser alfabeticos sin espacios'],
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 115, 'Validar que el campo tenga un nombre con un minimo de 1 caracter mas la extension (total 5)', 'EDIT', 'nuevo_FicheropdfA_nombrepdf_min_size_KO', 'El nombre debe contener un minimo 1 caracter mas la extension (total 4)..'],
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 116, 'Validar que el campo tenga un nombre con un maximo de 20 caracteres', 'EDIT', 'nuevo_FicheropdfA_nombrepdf_max_size_KO', 'El nombre debe contener maximo de 20 caracteres.'],
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 117, 'Validar que el campo sea un pdf', 'EDIT', 'nuevo_FicheropdfA_format_KO', 'El format debe ser pdf.'],
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 118, 'Validar que el campo no supere el tamaño maximo de 2MB', 'EDIT', 'nuevo_FicheropdfA_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
  ['articulo', 'nuevo_FicheropdfA', 'inputfile', 119, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

  //BUSQUEDA FicheropdfA
  ['articulo', 'FicheropdfA', 'input', 120, 'Validar que el campo este vacio o tenga un nombre con solo alfabeticos sin espacios ni puntos antes de la extension', 'SEARCH', 'FicheropdfA_nombrepdf_format_KO', 'El format deben ser alfabeticos sin espacios'],
  ['articulo', 'FicheropdfA', 'input', 121, 'Validar que el campo tenga un nombre con un maximo de 20 caracteres', 'SEARCH', 'FicheropdfA_nombrepdf_max_size_KO', 'El nombre debe contener maximo de 20 caracteres.'],
  ['articulo', 'FicheropdfA', 'input', 122, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],


];



let articulo_tests_fields = [

  //fechaPublicacion
  ['articulo', 'FechaPublicacionR', 1, 1, 'ADD', [{ FechaPublicacionR: '' }], 'FechaPublicacionR_vacio_KO'],
  ['articulo', 'FechaPublicacionR', 2, 2, 'ADD', [{ FechaPublicacionR: '12-11-2025' }], 'FechaPublicacionR_format_KO'],
  ['articulo', 'FechaPublicacionR', 3, 3, 'ADD', [{ FechaPublicacionR: '01/01/2099' }], 'FechaPublicacionR_superiorActual_KO'],
  ['articulo', 'FechaPublicacionR', 4, 4, 'ADD', [{ FechaPublicacionR: '20/11/2022' }], true],

  // EDIT
  ['articulo', 'FechaPublicacionR', 5, 5, 'EDIT', [{ FechaPublicacionR: '' }], 'FechaPublicacionR_vacio_KO'],
  ['articulo', 'FechaPublicacionR', 6, 6, 'EDIT', [{ FechaPublicacionR: '11-12-2025' }], 'FechaPublicacionR_format_KO'],
  ['articulo', 'FechaPublicacionR', 7, 7, 'EDIT', [{ FechaPublicacionR: '01/01/2099' }], 'FechaPublicacionR_superiorActual_KO'],
  ['articulo', 'FechaPublicacionR', 8, 8, 'EDIT', [{ FechaPublicacionR: '20/11/2022' }], true],

  ['articulo', 'FechaPublicacionR', 9, 9, 'SEARCH', [{ FechaPublicacionR: '' }], true],
  ['articulo', 'FechaPublicacionR', 10, 10, 'SEARCH', [{ FechaPublicacionR: '11-12-2025' }], 'FechaPublicacionR_format_KO'],
  ['articulo', 'FechaPublicacionR', 11, 11, 'SEARCH', [{ FechaPublicacionR: '20/11/2022' }], true],


  //SEARCH CodigoA
  ['articulo', 'CodigoA', 12, 12, 'SEARCH', [{ CodigoA: 'abcñ' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 13, 'SEARCH', [{ CodigoA: '12 344' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 14, 'SEARCH', [{ CodigoA: '12.343' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 15, 'SEARCH', [{ CodigoA: '12_343' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 16, 'SEARCH', [{ CodigoA: '1+123' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 17, 'SEARCH', [{ CodigoA: 'AS123' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 18, 'SEARCH', [{ CodigoA: '123A13' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 19, 'SEARCH', [{ CodigoA: '123A' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 20, 'SEARCH', [{ CodigoA: '12435a.' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 21, 'SEARCH', [{ CodigoA: 'acxìr2dg' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 22, 'SEARCH', [{ CodigoA: 'àc3xddg' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 23, 'SEARCH', [{ CodigoA: 'aù5xddg' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 24, 'SEARCH', [{ CodigoA: 'ac6Üxddg' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 25, 'SEARCH', [{ CodigoA: 'acï6ddg' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 12, 26, 'SEARCH', [{ CodigoA: 'acôd6dg' }], 'CodigoA_format_KO'],
  ['articulo', 'CodigoA', 13, 27, 'SEARCH', [{ CodigoA: '12232435454646' }], 'CodigoA_max_size_KO'],
  ['articulo', 'CodigoA', 14, 28, 'SEARCH', [{ CodigoA: '12345678901' }], true],


  //ADD AutoresA
  ['articulo', 'AutoresA', 15, 29, 'ADD', [{ AutoresA: '' }], 'AutoresA_vacio_KO'],
  ['articulo', 'AutoresA', 16, 30, 'ADD', [{ AutoresA: 'abc' }], 'AutoresA_min_size_KO'],
  ['articulo', 'AutoresA', 17, 31, 'ADD', [{ AutoresA: 'n'.repeat(201) }], 'AutoresA_max_size_KO'],
  ['articulo', 'AutoresA', 18, 32, 'ADD', [{ AutoresA: '12343535' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 18, 33, 'ADD', [{ AutoresA: 'ab1códefgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 18, 34, 'ADD', [{ AutoresA: 'ábcñdefgh33' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 18, 35, 'ADD', [{ AutoresA: '11abcñdéfgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 18, 36, 'ADD', [{ AutoresA: '.abcñdefghí' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 18, 37, 'ADD', [{ AutoresA: 'abcñ.defgú' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 18, 38, 'ADD', [{ AutoresA: 'àbcñdefgh.' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 18, 39, 'ADD', [{ AutoresA: 'ab@cñdèfgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 18, 40, 'ADD', [{ AutoresA: '@abcñdefghì' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 18, 41, 'ADD', [{ AutoresA: 'aòcñdefgh@' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 18, 42, 'ADD', [{ AutoresA: 'abcÙ_defgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 18, 43, 'ADD', [{ AutoresA: '_abôcdefgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 18, 44, 'ADD', [{ AutoresA: 'abcüdefgh_' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 19, 45, 'ADD', [{ AutoresA: 'AutóoresA' }], true],

  //EDIT AutoresA
  ['articulo', 'AutoresA', 20, 46, 'EDIT', [{ AutoresA: '' }], 'AutoresA_vacio_KO'],
  ['articulo', 'AutoresA', 21, 47, 'EDIT', [{ AutoresA: 'abc' }], 'AutoresA_min_size_KO'],
  ['articulo', 'AutoresA', 22, 48, 'EDIT', [{ AutoresA: 'n'.repeat(201) }], 'AutoresA_max_size_KO'],
  ['articulo', 'AutoresA', 23, 49, 'EDIT', [{ AutoresA: '12343535' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 23, 50, 'EDIT', [{ AutoresA: 'ab1códefgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 23, 51, 'EDIT', [{ AutoresA: 'ábcñdefgh33' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 23, 52, 'EDIT', [{ AutoresA: '11abcñdéfgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 23, 53, 'EDIT', [{ AutoresA: '.abcñdefghí' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 23, 54, 'EDIT', [{ AutoresA: 'abcñ.defgú' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 23, 55, 'EDIT', [{ AutoresA: 'àbcñdefgh.' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 23, 56, 'EDIT', [{ AutoresA: 'ab@cñdèfgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 23, 57, 'EDIT', [{ AutoresA: '@abcñdefghì' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 23, 58, 'EDIT', [{ AutoresA: 'aòcñdefgh@' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 23, 59, 'EDIT', [{ AutoresA: 'abcÙ_defgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 23, 60, 'EDIT', [{ AutoresA: '_abôcdefgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 23, 61, 'EDIT', [{ AutoresA: 'abcüdefgh_' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 24, 62, 'EDIT', [{ AutoresA: 'AutoresA' }], true],

  //SEARCH AutoresA
  ['articulo', 'AutoresA', 25, 63, 'SEARCH', [{ AutoresA: '12343535' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 25, 64, 'SEARCH', [{ AutoresA: 'ab1códefgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 25, 65, 'SEARCH', [{ AutoresA: 'ábcñdefgh33' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 25, 66, 'SEARCH', [{ AutoresA: '11abcñdéfgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 25, 67, 'SEARCH', [{ AutoresA: '.abcñdefghí' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 25, 68, 'SEARCH', [{ AutoresA: 'abcñ.defgú' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 25, 69, 'SEARCH', [{ AutoresA: 'àbcñdefgh.' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 25, 70, 'SEARCH', [{ AutoresA: 'ab@cñdèfgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 25, 71, 'SEARCH', [{ AutoresA: '@abcñdefghì' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 25, 72, 'SEARCH', [{ AutoresA: 'aòcñdefgh@' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 25, 73, 'SEARCH', [{ AutoresA: 'abc_Ùdefgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 25, 74, 'SEARCH', [{ AutoresA: '_abôcdefgh' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 25, 75, 'SEARCH', [{ AutoresA: 'abcüdefgh_' }], 'AutoresA_format_KO'],
  ['articulo', 'AutoresA', 26, 76, 'SEARCH', [{ AutoresA: 'n'.repeat(201) }], 'AutoresA_max_size_KO'],
  ['articulo', 'AutoresA', 27, 77, 'SEARCH', [{ AutoresA: 'AutoresA' }], true],

  //ADD TituloA                                
  ['articulo', 'TituloA', 28, 78, 'ADD', [{ TituloA: '' }], 'TituloA_vacio_KO'],
  ['articulo', 'TituloA', 29, 79, 'ADD', [{ TituloA: 'abc123' }], 'TituloA_format_KO'],
  ['articulo', 'TituloA', 29, 80, 'ADD', [{ TituloA: 'ab.sdff' }], 'TituloA_format_KO'],
  ['articulo', 'TituloA', 29, 81, 'ADD', [{ TituloA: 'abcsds.' }], 'TituloA_format_KO'],
  ['articulo', 'TituloA', 29, 82, 'ADD', [{ TituloA: '(abcsadasf' }], 'TituloA_format_KO'],
  ['articulo', 'TituloA', 30, 83, 'ADD', [{ TituloA: 'a' }], 'TituloA_min_size_KO'],
  ['articulo', 'TituloA', 31, 84, 'ADD', [{ TituloA: 'n'.repeat(101) }], 'TituloA_max_size_KO'],
  ['articulo', 'TituloA', 32, 85, 'ADD', [{ TituloA: 'Nombre' }], true],

  //EDIT TituloA                                
  ['articulo', 'TituloA', 33, 86, 'EDIT', [{ TituloA: '' }], 'TituloA_vacio_KO'],
  ['articulo', 'TituloA', 34, 87, 'EDIT', [{ TituloA: 'abc123' }], 'TituloA_format_KO'],
  ['articulo', 'TituloA', 34, 88, 'EDIT', [{ TituloA: 'ab.sdff' }], 'TituloA_format_KO'],
  ['articulo', 'TituloA', 34, 89, 'EDIT', [{ TituloA: 'abcsds.' }], 'TituloA_format_KO'],
  ['articulo', 'TituloA', 34, 90, 'EDIT', [{ TituloA: '(abcsadasf' }], 'TituloA_format_KO'],
  ['articulo', 'TituloA', 35, 91, 'EDIT', [{ TituloA: 'a' }], 'TituloA_min_size_KO'],
  ['articulo', 'TituloA', 36, 92, 'EDIT', [{ TituloA: 'n'.repeat(101) }], 'TituloA_max_size_KO'],
  ['articulo', 'TituloA', 37, 93, 'EDIT', [{ TituloA: 'Nombre' }], true],

  //SEARCH TituloA
  ['articulo', 'TituloA', 38, 94, 'SEARCH', [{ TituloA: 'abc123' }], 'TituloA_format_KO'],
  ['articulo', 'TituloA', 38, 95, 'SEARCH', [{ TituloA: 'ab.sdff' }], 'TituloA_format_KO'],
  ['articulo', 'TituloA', 38, 96, 'SEARCH', [{ TituloA: 'abcsds.' }], 'TituloA_format_KO'],
  ['articulo', 'TituloA', 38, 97, 'SEARCH', [{ TituloA: '(abcsadasf' }], 'TituloA_format_KO'],
  ['articulo', 'TituloA', 39, 98, 'SEARCH', [{ TituloA: 'n'.repeat(101) }], 'TituloA_max_size_KO'],
  ['articulo', 'TituloA', 40, 99, 'SEARCH', [{ TituloA: 'Nombre' }], true],

  //ADD TituloR 
  ['articulo', 'TituloR', 41, 100, 'ADD', [{ TituloR: '' }], 'TituloR_vacio_KO'],
  ['articulo', 'TituloR', 42, 101, 'ADD', [{ TituloR: 'abc123' }], 'TituloR_format_KO'],
  ['articulo', 'TituloR', 42, 102, 'ADD', [{ TituloR: 'abcsad.' }], 'TituloR_format_KO'],
  ['articulo', 'TituloR', 42, 103, 'ADD', [{ TituloR: 'abc.zsad' }], 'TituloR_format_KO'],
  ['articulo', 'TituloR', 42, 104, 'ADD', [{ TituloR: '(abcsfa' }], 'TituloR_format_KO'],
  ['articulo', 'TituloR', 43, 105, 'ADD', [{ TituloR: 'a' }], 'TituloR_min_size_KO'],
  ['articulo', 'TituloR', 44, 106, 'ADD', [{ TituloR: 'n'.repeat(101) }], 'TituloR_max_size_KO'],
  ['articulo', 'TituloR', 45, 107, 'ADD', [{ TituloR: 'TituloR' }], true],

  //EDIT TituloR
  ['articulo', 'TituloR', 46, 108, 'EDIT', [{ TituloR: '' }], 'TituloR_vacio_KO'],
  ['articulo', 'TituloR', 47, 109, 'EDIT', [{ TituloR: 'abc123' }], 'TituloR_format_KO'],
  ['articulo', 'TituloR', 47, 110, 'EDIT', [{ TituloR: 'abcsad.' }], 'TituloR_format_KO'],
  ['articulo', 'TituloR', 47, 111, 'EDIT', [{ TituloR: 'abc.zsad' }], 'TituloR_format_KO'],
  ['articulo', 'TituloR', 47, 112, 'EDIT', [{ TituloR: '(abcsfa' }], 'TituloR_format_KO'],
  ['articulo', 'TituloR', 48, 113, 'EDIT', [{ TituloR: 'a' }], 'TituloR_min_size_KO'],
  ['articulo', 'TituloR', 49, 114, 'EDIT', [{ TituloR: 'n'.repeat(101) }], 'TituloR_max_size_KO'],
  ['articulo', 'TituloR', 50, 115, 'EDIT', [{ TituloR: 'TituloR' }], true],

  //SEARCH TituloR
  ['articulo', 'TituloR', 51, 116, 'SEARCH', [{ TituloR: 'abc123' }], 'TituloR_format_KO'],
  ['articulo', 'TituloR', 51, 117, 'SEARCH', [{ TituloR: 'abcsad.' }], 'TituloR_format_KO'],
  ['articulo', 'TituloR', 51, 118, 'SEARCH', [{ TituloR: 'abc.zsad' }], 'TituloR_format_KO'],
  ['articulo', 'TituloR', 51, 119, 'SEARCH', [{ TituloR: '(abcsfa' }], 'TituloR_format_KO'],
  ['articulo', 'TituloR', 52, 120, 'SEARCH', [{ TituloR: 'n'.repeat(101) }], 'TituloR_max_size_KO'],
  ['articulo', 'TituloR', 53, 121, 'SEARCH', [{ TituloR: 'TituloR' }], true],

  //ADD EstadoA            
  ['articulo', 'EstadoA', 54, 122, 'ADD', [{ EstadoA: '' }], 'EstadoA_vacio_KO'],
  ['articulo', 'EstadoA', 55, 123, 'ADD', [{ EstadoA: 'Envia' }], 'EstadoA_format_KO'],
  ['articulo', 'EstadoA', 56, 124, 'ADD', [{ EstadoA: 'Enviado' }], true],

  //EDIT EstadoA            
  ['articulo', 'EstadoA', 57, 125, 'EDIT', [{ EstadoA: '' }], 'EstadoA_vacio_KO'],
  ['articulo', 'EstadoA', 58, 126, 'EDIT', [{ EstadoA: 'Envia' }], 'EstadoA_format_KO'],
  ['articulo', 'EstadoA', 59, 127, 'EDIT', [{ EstadoA: 'Enviado' }], true],

  //SEARCH EstadoA            
  ['articulo', 'EstadoA', 60, 128, 'SEARCH', [{ EstadoA: 'Envia' }], 'EstadoA_format_KO'],
  ['articulo', 'EstadoA', 61, 129, 'SEARCH', [{ EstadoA: 'Enviado' }], true],

  //ADD ISSN       
  ['articulo', 'ISSN', 62, 130, 'ADD', [{ ISSN: '' }], 'ISSN_vacio_KO'],
  ['articulo', 'ISSN', 63, 131, 'ADD', [{ ISSN: '1234-5678' }], 'ISSN_format_KO'],
  ['articulo', 'ISSN', 64, 132, 'ADD', [{ ISSN: '1234-12345' }], 'ISSN_max_size_KO'],
  ['articulo', 'ISSN', 65, 133, 'ADD', [{ ISSN: '1234-5679' }], true],

  //EDIT ISSN       
  ['articulo', 'ISSN', 66, 134, 'EDIT', [{ ISSN: '' }], 'ISSN_vacio_KO'],
  ['articulo', 'ISSN', 67, 135, 'EDIT', [{ ISSN: '1234-2348' }], 'ISSN_format_KO'],
  ['articulo', 'ISSN', 68, 136, 'EDIT', [{ ISSN: '1234-12345' }], 'ISSN_max_size_KO'],
  ['articulo', 'ISSN', 69, 137, 'EDIT', [{ ISSN: '1234-5679' }], true],

  //SEARCH ISSN       
  ['articulo', 'ISSN', 70, 138, 'SEARCH', [{ ISSN: '' }], 'ISSN_format_KO'],
  ['articulo', 'ISSN', 71, 139, 'SEARCH', [{ ISSN: '1234-12345' }], 'ISSN_max_size_KO'],
  ['articulo', 'ISSN', 72, 140, 'SEARCH', [{ ISSN: '1234-5679' }], true],

  //ADD VolumenR
  ['articulo', 'VolumenR', 73, 141, 'ADD', [{ VolumenR: '' }], 'VolumenR_vacio_KO'],
  ['articulo', 'VolumenR', 74, 142, 'ADD', [{ VolumenR: '12345' }], 'VolumenR_max_size_KO'],
  ['articulo', 'VolumenR', 75, 143, 'ADD', [{ VolumenR: '145d' }], 'VolumenR_format_KO'],
  ['articulo', 'VolumenR', 75, 144, 'ADD', [{ VolumenR: '15.8' }], 'VolumenR_format_KO'],
  ['articulo', 'VolumenR', 75, 145, 'ADD', [{ VolumenR: '155.' }], 'VolumenR_format_KO'],
  ['articulo', 'VolumenR', 76, 146, 'ADD', [{ VolumenR: '1234' }], true],

  //EDIT VolumenR
  ['articulo', 'VolumenR', 77, 147, 'EDIT', [{ VolumenR: '' }], 'VolumenR_vacio_KO'],
  ['articulo', 'VolumenR', 78, 148, 'EDIT', [{ VolumenR: '12345' }], 'VolumenR_max_size_KO'],
  ['articulo', 'VolumenR', 79, 149, 'EDIT', [{ VolumenR: '145d' }], 'VolumenR_format_KO'],
  ['articulo', 'VolumenR', 79, 150, 'EDIT', [{ VolumenR: '15.8' }], 'VolumenR_format_KO'],
  ['articulo', 'VolumenR', 79, 151, 'EDIT', [{ VolumenR: '155.' }], 'VolumenR_format_KO'],
  ['articulo', 'VolumenR', 80, 152, 'EDIT', [{ VolumenR: '1234' }], true],

  //SEARCH VolumenR
  ['articulo', 'VolumenR', 81, 153, 'SEARCH', [{ VolumenR: '145d' }], 'VolumenR_format_KO'],
  ['articulo', 'VolumenR', 81, 154, 'SEARCH', [{ VolumenR: '15.8' }], 'VolumenR_format_KO'],
  ['articulo', 'VolumenR', 81, 155, 'SEARCH', [{ VolumenR: '155.' }], 'VolumenR_format_KO'],
  ['articulo', 'VolumenR', 82, 156, 'SEARCH', [{ VolumenR: '12345' }], 'VolumenR_max_size_KO'],
  ['articulo', 'VolumenR', 83, 157, 'SEARCH', [{ VolumenR: '1234' }], true],

  //ADD PagIniA 84-94
  ['articulo', 'PagIniA', 84, 158, 'ADD', [{ PagIniA: '' }], 'PagIniA_vacio_KO'],
  ['articulo', 'PagIniA', 85, 159, 'ADD', [{ PagIniA: '123.' }], 'PagIniA_format_KO'],
  ['articulo', 'PagIniA', 86, 160, 'ADD', [{ PagIniA: '12345' }], 'PagIniA_max_size_KO'],
  ['articulo', 'PagIniA', 87, 161, 'ADD', [{ PagIniA: '123' }], true],

  //EDIT PagIniA
  ['articulo', 'PagIniA', 88, 162, 'EDIT', [{ PagIniA: '' }], 'PagIniA_vacio_KO'],
  ['articulo', 'PagIniA', 89, 163, 'EDIT', [{ PagIniA: '123.' }], 'PagIniA_format_KO'],
  ['articulo', 'PagIniA', 90, 164, 'EDIT', [{ PagIniA: '12345' }], 'PagIniA_max_size_KO'],
  ['articulo', 'PagIniA', 91, 165, 'EDIT', [{ PagIniA: '123' }], true],

  //SEARCH PagIniA
  ['articulo', 'PagIniA', 92, 166, 'SEARCH', [{ PagIniA: '123.' }], 'PagIniA_format_KO'],
  ['articulo', 'PagIniA', 93, 167, 'SEARCH', [{ PagIniA: '12345' }], 'PagIniA_max_size_KO'],
  ['articulo', 'PagIniA', 94, 168, 'SEARCH', [{ PagIniA: '123' }], true],

  //ADD PagFinA
  ['articulo', 'PagFinA', 95, 169, 'ADD', [{ PagFinA: '' }], 'PagFinA_vacio_KO'],
  ['articulo', 'PagFinA', 96, 170, 'ADD', [{ PagFinA: '12a' }], 'PagFinA_format_KO'],
  ['articulo', 'PagFinA', 97, 171, 'ADD', [{ PagFinA: '12345' }], 'PagFinA_max_size_KO'],
  ['articulo', 'PagFinA', 98, 172, 'ADD', [{ PagFinA: '123' }], true],

  //EDIT PagFinA
  ['articulo', 'PagFinA', 99, 173, 'EDIT', [{ PagFinA: '' }], 'PagFinA_vacio_KO'],
  ['articulo', 'PagFinA', 100, 174, 'EDIT', [{ PagFinA: '123.' }], 'PagFinA_format_KO'],
  ['articulo', 'PagFinA', 101, 175, 'EDIT', [{ PagFinA: '12345' }], 'PagFinA_max_size_KO'],
  ['articulo', 'PagFinA', 102, 176, 'EDIT', [{ PagFinA: '123' }], true],

  //SEARCH PagFinA
  ['articulo', 'PagFinA', 103, 177, 'SEARCH', [{ PagFinA: '123.' }], 'PagFinA_format_KO'],
  ['articulo', 'PagFinA', 104, 178, 'SEARCH', [{ PagFinA: '12345' }], 'PagFinA_max_size_KO'],
  ['articulo', 'PagFinA', 105, 179, 'SEARCH', [{ PagFinA: '123' }], true],

  //BUSCAR FicheropdfA
  ['articulo', 'FicheropdfA', 120, 180, 'SEARCH', [{ FicheropdfA: 'nombre con espacios.jpg' }], 'FicheropdfA_nombrepdf_format_KO'],
  ['articulo', 'FicheropdfA', 120, 181, 'SEARCH', [{ FicheropdfA: 'nombr,econ2.jpg' }], 'FicheropdfA_nombrepdf_format_KO'],
  ['articulo', 'FicheropdfA', 120, 182, 'SEARCH', [{ FicheropdfA: 'n.om br.1jpg' }], 'FicheropdfA_nombrepdf_format_KO'],
  ['articulo', 'FicheropdfA', 120, 183, 'SEARCH', [{ FicheropdfA: '.n4@ombreespacios.jpg' }], 'FicheropdfA_nombrepdf_format_KO'],
  ['articulo', 'FicheropdfA', 120, 184, 'SEARCH', [{ FicheropdfA: 'mbree|@5spacios..jpg' }], 'FicheropdfA_nombrepdf_format_KO'],
  ['articulo', 'FicheropdfA', 121, 185, 'SEARCH', [{ FicheropdfA: 'n'.repeat(41) + '.jpg' }], 'FicheropdfA_nombrepdf_max_size_KO'],
  ['articulo', 'FicheropdfA', 122, 186, 'SEARCH', [{ FicheropdfA: 'nombrecorrecto.jpg' }], true]

];

/*

Las pruebas para tipo file se crearán mediante un array de nombre ‘nombrentidad_tests_files’ que contenga:

la entidad, 
el campo, 
el número de definición de test, 
el número de prueba (secuencial desde 22 hasta el final)
la acción a realizar
// SOBRA el parámetro a probar (max_size_file, type_file, format_name_file)
// valor/es de parámetro a probar [[parámetro, valor]] el código asociado de error/valor true de éxito

*/

let articulo_tests_files = [
  //FicheropdfA 

  ['articulo', 'nuevo_FicheropdfA', 106, 1, 'ADD', 'existe', [], 'nuevo_FicheropdfA_vacio_KO'],
  ['articulo', 'nuevo_FicheropdfA', 107, 2, 'ADD', 'format_name_file', [{ format_name_file: 'nombre con espacios.pdf' }, { type_file: 'application/pdf' }, { max_size_file: 19 }], 'nuevo_FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format pdf
  ['articulo', 'nuevo_FicheropdfA', 108, 3, 'ADD', 'format_name_file', [{ format_name_file: '.pdf' }, { type_file: 'application/pdf' }, { max_size_file: 19 }], 'nuevo_FicheropdfA_nombrepdf_min_size_KO'],
  ['articulo', 'nuevo_FicheropdfA', 109, 4, 'ADD', 'format_name_file', [{ format_name_file: 'n'.repeat(41) + '.pdf' }, { type_file: 'application/pdf' }, { max_size_file: 19 }], 'nuevo_FicheropdfA_nombrepdf_max_size_KO'], //nombre con 41 caracteres y format jpg
  ['articulo', 'nuevo_FicheropdfA', 110, 5, 'ADD', 'type_file', [{ format_name_file: 'foto.pdf' }, { type_file: 'image/jpg' }, { max_size_file: 19 }], 'nuevo_FicheropdfA_format_KO'], //format jpg
  ['articulo', 'nuevo_FicheropdfA', 111, 6, 'ADD', 'max_size_file', [{ format_name_file: 'fomkjskdkto.pdf' }, { type_file: 'application/pdf' }, { max_size_file: 21000000 }], 'nuevo_FicheropdfA_max_size_KO'], //20MB
  ['articulo', 'nuevo_FicheropdfA', 112, 7, 'ADD', 'correcto', [{ format_name_file: 'nombrecorrecto.pdf' }, { type_file: 'application/pdf' }, { max_size_file: 19 }], true], //correcto 

  //EDITAR FicheropdfA
  ['articulo', 'nuevo_FicheropdfA', 113, 8, 'EDIT', 'existe', [], 'nuevo_FicheropdfA_vacio_KO'],
  ['articulo', 'nuevo_FicheropdfA', 114, 9, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre con espacios.pdf' }, { type_file: 'application/pdf' }, { max_size_file: 19 }], 'nuevo_FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format pdf
  ['articulo', 'nuevo_FicheropdfA', 115, 10, 'EDIT', 'format_name_file', [{ format_name_file: '.pdf' }, { type_file: 'application/pdf' }, { max_size_file: 19 }], 'nuevo_FicheropdfA_nombrepdf_min_size_KO'],
  ['articulo', 'nuevo_FicheropdfA', 116, 11, 'EDIT', 'format_name_file', [{ format_name_file: 'n'.repeat(41) + '.pdf' }, { type_file: 'application/pdf' }, { max_size_file: 19 }], 'nuevo_FicheropdfA_nombrepdf_max_size_KO'], //nombre con 41 caracteres y format jpg
  ['articulo', 'nuevo_FicheropdfA', 117, 12, 'EDIT', 'type_file', [{ format_name_file: 'foto.pdf' }, { type_file: 'image/jpg' }, { max_size_file: 19 }], 'nuevo_FicheropdfA_format_KO'], //format jpg
  ['articulo', 'nuevo_FicheropdfA', 118, 13, 'EDIT', 'max_size_file', [{ format_name_file: 'foto.pdf' }, { type_file: 'application/pdf' }, { max_size_file: 21000000 }], 'nuevo_FicheropdfA_max_size_KO'], //20MB
  ['articulo', 'nuevo_FicheropdfA', 119, 14, 'EDIT', 'correcto', [{ format_name_file: 'nombrecorrecto.pdf' }, { type_file: 'application/pdf' }, { max_size_file: 19 }], true], //correcto 

];



















//UBICACION---------------------------------------------------------------------------------------























let ubicacion_def_tests = [
/*
  // ---------- ID_SITE ----------
  ["ubicacion", 'id_site', 'input', 1, 'Validar que no esté vacío', 'ADD', 'id_site_vacio_KO', 'No puede estar vacío.'],
  ["ubicacion", 'id_site', 'input', 2, 'Validar que solo contenga números', 'ADD', 'id_site_format_KO', 'Solo se admiten números.'],
  ["ubicacion", 'id_site', 'input', 3, 'Validar longitud mínima 1', 'ADD', 'id_site_min_size_KO', 'Debe tener al menos 1 carácter.'],
  ["ubicacion", 'id_site', 'input', 4, 'Validar longitud máxima 11', 'ADD', 'id_site_max_size_KO', 'No puede superar 11 caracteres.'],
  ["ubicacion", 'id_site', 'input', 5, 'Validar correcto', 'ADD', true, 'Correcto.'],

  ["ubicacion", 'id_site', 'input', 6, 'Validar que no esté vacío', 'EDIT', 'id_site_vacio_KO', 'No puede estar vacío.'],
  ["ubicacion", 'id_site', 'input', 7, 'Validar que solo contenga números', 'EDIT', 'id_site_format_KO', 'Solo se admiten números.'],
  ["ubicacion", 'id_site', 'input', 8, 'Validar longitud mínima 1', 'EDIT', 'id_site_min_size_KO', 'Debe tener al menos 1 carácter.'],
  ["ubicacion", 'id_site', 'input', 9, 'Validar longitud máxima 11', 'EDIT', 'id_site_max_size_KO', 'No puede superar 11 caracteres.'],
  ["ubicacion", 'id_site', 'input', 10, 'Validar correcto', 'EDIT', true, 'Correcto.'],
*/

  ["ubicacion", 'id_site', 'input', 11, 'Validar que esté vacío o numérico', 'SEARCH', 'id_site_format_KO', 'Solo se admiten números.'],
  ["ubicacion", 'id_site', 'input', 12, 'Validar longitud máxima 11', 'SEARCH', 'id_site_max_size_KO', 'No puede superar 11 caracteres.'],
  ["ubicacion", 'id_site', 'input', 13, 'Validar correcto', 'SEARCH', true, 'Correcto.'],

  // ---------- SITE_LATITUD ----------
  ["ubicacion", 'site_latitud', 'input', 14, 'Validar que no esté vacío', 'ADD', 'site_latitud_vacio_KO', 'No puede estar vacío.'],
  ["ubicacion", 'site_latitud', 'input', 15, 'Validar que sea numérico', 'ADD', 'site_latitud_format_KO', 'Formato inválido, solo números.'],
  ["ubicacion", 'site_latitud', 'input', 16, 'Validar valor entre -90 y 90', 'ADD', 'site_latitud_range_KO', 'Latitud inválida.'],
  ["ubicacion", 'site_latitud', 'input', 17, 'Validar máximo 6 decimales', 'ADD', 'site_latitud_decimals_KO', 'Máximo 6 decimales permitidos.'],
  ["ubicacion", 'site_latitud', 'input', 18, 'Validar correcto', 'ADD', true, 'Correcto.'],

  ["ubicacion", 'site_latitud', 'input', 19, 'Validar que no esté vacío', 'EDIT', 'site_latitud_vacio_KO', 'No puede estar vacío.'],
  ["ubicacion", 'site_latitud', 'input', 20, 'Validar que sea numérico', 'EDIT', 'site_latitud_format_KO', 'Formato inválido, solo números.'],
  ["ubicacion", 'site_latitud', 'input', 21, 'Validar valor entre -90 y 90', 'EDIT', 'site_latitud_range_KO', 'Latitud inválida.'],
  ["ubicacion", 'site_latitud', 'input', 22, 'Validar máximo 6 decimales', 'EDIT', 'site_latitud_decimals_KO', 'Máximo 6 decimales permitidos.'],
  ["ubicacion", 'site_latitud', 'input', 23, 'Validar correcto', 'EDIT', true, 'Correcto.'],

  ["ubicacion", 'site_latitud', 'input', 24, 'Validar que esté vacío o numérico', 'SEARCH', 'site_latitud_format_KO', 'Formato inválido, solo números.'],
  ["ubicacion", 'site_latitud', 'input', 25, 'Validar valor entre -90 y 90', 'SEARCH', 'site_latitud_range_KO', 'Latitud inválida.'],
  ["ubicacion", 'site_latitud', 'input', 26, 'Validar máximo 6 decimales', 'SEARCH', 'site_latitud_decimals_KO', 'Máximo 6 decimales permitidos.'],
  ["ubicacion", 'site_latitud', 'input', 27, 'Validar correcto', 'SEARCH', true, 'Correcto.'],

  // ---------- SITE_LONGITUD ----------
  ["ubicacion", 'site_longitud', 'input', 28, 'Validar que no esté vacío', 'ADD', 'site_longitud_vacio_KO', 'No puede estar vacío.'],
  ["ubicacion", 'site_longitud', 'input', 29, 'Validar que sea numérico', 'ADD', 'site_longitud_format_KO', 'Formato inválido, solo números.'],
  ["ubicacion", 'site_longitud', 'input', 30, 'Validar valor entre -180 y 180', 'ADD', 'site_longitud_range_KO', 'Longitud inválida.'],
  ["ubicacion", 'site_longitud', 'input', 31, 'Validar máximo 6 decimales', 'ADD', 'site_longitud_decimals_KO', 'Máximo 6 decimales permitidos.'],
  ["ubicacion", 'site_longitud', 'input', 32, 'Validar correcto', 'ADD', true, 'Correcto.'],

  ["ubicacion", 'site_longitud', 'input', 33, 'Validar que no esté vacío', 'EDIT', 'site_longitud_vacio_KO', 'No puede estar vacío.'],
  ["ubicacion", 'site_longitud', 'input', 34, 'Validar que sea numérico', 'EDIT', 'site_longitud_format_KO', 'Formato inválido, solo números.'],
  ["ubicacion", 'site_longitud', 'input', 35, 'Validar valor entre -180 y 180', 'EDIT', 'site_longitud_range_KO', 'Longitud inválida.'],
  ["ubicacion", 'site_longitud', 'input', 36, 'Validar máximo 6 decimales', 'EDIT', 'site_longitud_decimals_KO', 'Máximo 6 decimales permitidos.'],
  ["ubicacion", 'site_longitud', 'input', 37, 'Validar correcto', 'EDIT', true, 'Correcto.'],

  ["ubicacion", 'site_longitud', 'input', 38, 'Validar que esté vacío o numérico', 'SEARCH', 'site_longitud_format_KO', 'Formato inválido, solo números.'],
  ["ubicacion", 'site_longitud', 'input', 39, 'Validar valor entre -180 y 180', 'SEARCH', 'site_longitud_range_KO', 'Longitud inválida.'],
  ["ubicacion", 'site_longitud', 'input', 40, 'Validar máximo 6 decimales', 'SEARCH', 'site_longitud_decimals_KO', 'Máximo 6 decimales permitidos.'],
  ["ubicacion", 'site_longitud', 'input', 41, 'Validar correcto', 'SEARCH', true, 'Correcto.'],

  // ---------- SITE_ALTITUDE ----------
  ["ubicacion", 'site_altitude', 'input', 42, 'Validar que no esté vacío', 'ADD', 'site_altitude_vacio_KO', 'No puede estar vacío.'],
  ["ubicacion", 'site_altitude', 'input', 43, 'Validar que sea numérico', 'ADD', 'site_altitude_format_KO', 'Formato inválido, solo números.'],
  ["ubicacion", 'site_altitude', 'input', 44, 'Validar longitud mínima 1', 'ADD', 'site_altitude_min_size_KO', 'Debe tener al menos 1 carácter.'],
  ["ubicacion", 'site_altitude', 'input', 45, 'Validar longitud máxima 4', 'ADD', 'site_altitude_max_size_KO', 'No puede superar 4 caracteres.'],
  ["ubicacion", 'site_altitude', 'input', 46, 'Validar correcto', 'ADD', true, 'Correcto.'],

  ["ubicacion", 'site_altitude', 'input', 47, 'Validar que no esté vacío', 'EDIT', 'site_altitude_vacio_KO', 'No puede estar vacío.'],
  ["ubicacion", 'site_altitude', 'input', 48, 'Validar que sea numérico', 'EDIT', 'site_altitude_format_KO', 'Formato inválido, solo números.'],
  ["ubicacion", 'site_altitude', 'input', 49, 'Validar longitud mínima 1', 'EDIT', 'site_altitude_min_size_KO', 'Debe tener al menos 1 carácter.'],
  ["ubicacion", 'site_altitude', 'input', 50, 'Validar longitud máxima 4', 'EDIT', 'site_altitude_max_size_KO', 'No puede superar 4 caracteres.'],
  ["ubicacion", 'site_altitude', 'input', 51, 'Validar correcto', 'EDIT', true, 'Correcto.'],

  ["ubicacion", 'site_altitude', 'input', 52, 'Validar que esté vacío o numérico', 'SEARCH', 'site_altitude_format_KO', 'Formato inválido, solo números.'],
  ["ubicacion", 'site_altitude', 'input', 53, 'Validar longitud máxima 4', 'SEARCH', 'site_altitude_max_size_KO', 'No puede superar 4 caracteres.'],
  ["ubicacion", 'site_altitude', 'input', 54, 'Validar correcto', 'SEARCH', true, 'Correcto.'],

  // ---------- SITE_LOCALITY ----------
  ["ubicacion", 'site_locality', 'input', 55, 'Validar que no esté vacío', 'ADD', 'site_locality_vacio_KO', 'No puede estar vacío.'],
  ["ubicacion", 'site_locality', 'input', 56, 'Validar formato solo letras y espacios', 'ADD', 'site_locality_format_KO', 'Formato inválido.'],
  ["ubicacion", 'site_locality', 'input', 57, 'Validar longitud mínima 2', 'ADD', 'site_locality_min_size_KO', 'Debe tener al menos 2 caracteres.'],
  ["ubicacion", 'site_locality', 'input', 58, 'Validar longitud máxima 40', 'ADD', 'site_locality_max_size_KO', 'No puede superar 40 caracteres.'],
  ["ubicacion", 'site_locality', 'input', 59, 'Validar correcto', 'ADD', true, 'Correcto.'],

  ["ubicacion", 'site_locality', 'input', 60, 'Validar que no esté vacío', 'EDIT', 'site_locality_vacio_KO', 'No puede estar vacío.'],
  ["ubicacion", 'site_locality', 'input', 61, 'Validar formato solo letras y espacios', 'EDIT', 'site_locality_format_KO', 'Formato inválido.'],
  ["ubicacion", 'site_locality', 'input', 62, 'Validar longitud mínima 2', 'EDIT', 'site_locality_min_size_KO', 'Debe tener al menos 2 caracteres.'],
  ["ubicacion", 'site_locality', 'input', 63, 'Validar longitud máxima 40', 'EDIT', 'site_locality_max_size_KO', 'No puede superar 40 caracteres.'],
  ["ubicacion", 'site_locality', 'input', 64, 'Validar correcto', 'EDIT', true, 'Correcto.'],

  ["ubicacion", 'site_locality', 'input', 65, 'Validar que esté vacío o letras y espacios', 'SEARCH', 'site_locality_format_KO', 'Formato inválido.'],
  ["ubicacion", 'site_locality', 'input', 66, 'Validar longitud máxima 40', 'SEARCH', 'site_locality_max_size_KO', 'No puede superar 40 caracteres.'],
  ["ubicacion", 'site_locality', 'input', 67, 'Validar correcto', 'SEARCH', true, 'Correcto.'],

  // ---------- SITE_PROVIDER_LOGIN ----------
  ["ubicacion", 'site_provider_login', 'input', 68, 'Validar que no esté vacío', 'ADD', 'site_provider_login_vacio_KO', 'No puede estar vacío.'],
  ["ubicacion", 'site_provider_login', 'input', 69, 'Validar formato alfanumérico', 'ADD', 'site_provider_login_format_KO', 'Formato inválido, solo letras, números y guiones.'],
  ["ubicacion", 'site_provider_login', 'input', 70, 'Validar longitud mínima 4', 'ADD', 'site_provider_login_min_size_KO', 'Debe tener al menos 4 caracteres.'],
  ["ubicacion", 'site_provider_login', 'input', 71, 'Validar longitud máxima 30', 'ADD', 'site_provider_login_max_size_KO', 'No puede superar 30 caracteres.'],
  ["ubicacion", 'site_provider_login', 'input', 72, 'Validar correcto', 'ADD', true, 'Correcto.'],

  ["ubicacion", 'site_provider_login', 'input', 73, 'Validar que no esté vacío', 'EDIT', 'site_provider_login_vacio_KO', 'No puede estar vacío.'],
  ["ubicacion", 'site_provider_login', 'input', 74, 'Validar formato alfanumérico', 'EDIT', 'site_provider_login_format_KO', 'Formato inválido, solo letras, números y guiones.'],
  ["ubicacion", 'site_provider_login', 'input', 75, 'Validar longitud mínima 4', 'EDIT', 'site_provider_login_min_size_KO', 'Debe tener al menos 4 caracteres.'],
  ["ubicacion", 'site_provider_login', 'input', 76, 'Validar longitud máxima 30', 'EDIT', 'site_provider_login_max_size_KO', 'No puede superar 30 caracteres.'],
  ["ubicacion", 'site_provider_login', 'input', 77, 'Validar correcto', 'EDIT', true, 'Correcto.'],

  ["ubicacion", 'site_provider_login', 'input', 78, 'Validar que esté vacío o alfanumérico', 'SEARCH', 'site_provider_login_format_KO', 'Formato inválido, solo letras, números y guiones.'],
  ["ubicacion", 'site_provider_login', 'input', 79, 'Validar longitud máxima 30', 'SEARCH', 'site_provider_login_max_size_KO', 'No puede superar 30 caracteres.'],
  ["ubicacion", 'site_provider_login', 'input', 80, 'Validar correcto', 'SEARCH', true, 'Correcto.'],

  // ---------- SITE_NORTH_PHOTO ----------
  // ADD
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 81, 'Validar que el campo no esté vacío', 'ADD', 'nuevo_site_north_photo_vacio_KO', 'Complete el campo'],
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 82, 'Validar que el nombre tenga solo alfanuméricos, ñ, acentos y sin espacios', 'ADD', 'nuevo_site_north_photo_nombrefoto_format_KO', 'El formato debe ser alfanumérico, con ñ y acentos, sin espacios.'],
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 83, 'Validar nombre mínimo 1 carácter', 'ADD', 'nuevo_site_north_photo_nombrefoto_min_size_KO', 'El nombre debe contener mínimo 1 carácter.'],
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 84, 'Validar nombre máximo 50 caracteres', 'ADD', 'nuevo_site_north_photo_nombrefoto_max_size_KO', 'El nombre debe contener máximo 50 caracteres.'],
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 85, 'Validar que el fichero sea imagen', 'ADD', 'nuevo_site_north_photo_format_KO', 'El fichero debe ser imagen.'],
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 86, 'Validar tamaño máximo 2MB', 'ADD', 'nuevo_site_north_photo_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 87, 'Validar correcto', 'ADD', true, 'Correcto.'],

  // EDIT
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 88, 'Validar que el campo no esté vacío', 'EDIT', 'nuevo_site_north_photo_vacio_KO', 'Complete el campo'],
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 89, 'Validar que el nombre tenga solo alfanuméricos, ñ, acentos y sin espacios', 'EDIT', 'nuevo_site_north_photo_nombrefoto_format_KO', 'El formato debe ser alfanumérico, con ñ y acentos, sin espacios.'],
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 90, 'Validar nombre mínimo 1 carácter', 'EDIT', 'nuevo_site_north_photo_nombrefoto_min_size_KO', 'El nombre debe contener mínimo 1 carácter.'],
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 91, 'Validar nombre máximo 50 caracteres', 'EDIT', 'nuevo_site_north_photo_nombrefoto_max_size_KO', 'El nombre debe contener máximo 50 caracteres.'],
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 92, 'Validar que el fichero sea imagen', 'EDIT', 'nuevo_site_north_photo_format_KO', 'El fichero debe ser imagen.'],
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 93, 'Validar tamaño máximo 2MB', 'EDIT', 'nuevo_site_north_photo_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
  ["ubicacion", 'nuevo_site_north_photo', 'inputfile', 94, 'Validar correcto', 'EDIT', true, 'Correcto.'],

  // SEARCH
  ["ubicacion", 'site_north_photo', 'input', 95, 'Validar que esté vacío o nombre con alfanuméricos, ñ, acentos y sin espacios', 'SEARCH', 'site_north_photo_nombrefoto_format_KO', 'El formato debe ser alfanumérico, con ñ y acentos, sin espacios.'],
  ["ubicacion", 'site_north_photo', 'input', 96, 'Validar nombre máximo 50 caracteres', 'SEARCH', 'site_north_photo_nombrefoto_max_size_KO', 'El nombre debe contener máximo 50 caracteres.'],
  ["ubicacion", 'site_north_photo', 'input', 97, 'Validar correcto', 'SEARCH', true, 'Correcto.'],

  // ---------- SITE_SOUTH_PHOTO ----------
  // ADD
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 98, 'Validar que el campo no esté vacío', 'ADD', 'nuevo_site_south_photo_vacio_KO', 'Complete el campo'],
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 99, 'Validar que el nombre tenga solo alfanuméricos, ñ, acentos y sin espacios', 'ADD', 'nuevo_site_south_photo_nombrefoto_format_KO', 'El formato debe ser alfanumérico, con ñ y acentos, sin espacios.'],
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 100, 'Validar nombre mínimo 1 carácter', 'ADD', 'nuevo_site_south_photo_nombrefoto_min_size_KO', 'El nombre debe contener mínimo 1 carácter.'],
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 101, 'Validar nombre máximo 50 caracteres', 'ADD', 'nuevo_site_south_photo_nombrefoto_max_size_KO', 'El nombre debe contener máximo 50 caracteres.'],
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 102, 'Validar que el fichero sea imagen', 'ADD', 'nuevo_site_south_photo_format_KO', 'El fichero debe ser imagen.'],
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 103, 'Validar tamaño máximo 2MB', 'ADD', 'nuevo_site_south_photo_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 104, 'Validar correcto', 'ADD', true, 'Correcto.'],

  // EDIT
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 105, 'Validar que el campo no esté vacío', 'EDIT', 'nuevo_site_south_photo_vacio_KO', 'Complete el campo'],
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 106, 'Validar que el nombre tenga solo alfanuméricos, ñ, acentos y sin espacios', 'EDIT', 'nuevo_site_south_photo_nombrefoto_format_KO', 'El formato debe ser alfanumérico, con ñ y acentos, sin espacios.'],
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 107, 'Validar nombre mínimo 1 carácter', 'EDIT', 'nuevo_site_south_photo_nombrefoto_min_size_KO', 'El nombre debe contener mínimo 1 carácter.'],
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 108, 'Validar nombre máximo 50 caracteres', 'EDIT', 'nuevo_site_south_photo_nombrefoto_max_size_KO', 'El nombre debe contener máximo 50 caracteres.'],
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 109, 'Validar que el fichero sea imagen', 'EDIT', 'nuevo_site_south_photo_format_KO', 'El fichero debe ser imagen.'],
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 110, 'Validar tamaño máximo 2MB', 'EDIT', 'nuevo_site_south_photo_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
  ["ubicacion", 'nuevo_site_south_photo', 'inputfile', 111, 'Validar correcto', 'EDIT', true, 'Correcto.'],

  // SEARCH
  ["ubicacion", 'site_south_photo', 'input', 112, 'Validar que esté vacío o nombre con alfanuméricos, ñ, acentos y sin espacios', 'SEARCH', 'site_south_photo_nombrefoto_format_KO', 'El formato debe ser alfanumérico, con ñ y acentos, sin espacios.'],
  ["ubicacion", 'site_south_photo', 'input', 113, 'Validar nombre máximo 50 caracteres', 'SEARCH', 'site_south_photo_nombrefoto_max_size_KO', 'El nombre debe contener máximo 50 caracteres.'],
  ["ubicacion", 'site_south_photo', 'input', 114, 'Validar correcto', 'SEARCH', true, 'Correcto.'],


  // ---------- SITE_EAST_PHOTO ----------
  // ADD
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 115, 'Validar que el campo no esté vacío', 'ADD', 'nuevo_site_east_photo_vacio_KO', 'Complete el campo'],
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 116, 'Validar que el nombre tenga solo alfanuméricos, ñ, acentos y sin espacios', 'ADD', 'nuevo_site_east_photo_nombrefoto_format_KO', 'El formato debe ser alfanumérico, con ñ y acentos, sin espacios.'],
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 117, 'Validar nombre mínimo 1 carácter', 'ADD', 'nuevo_site_east_photo_nombrefoto_min_size_KO', 'El nombre debe contener mínimo 1 carácter.'],
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 118, 'Validar nombre máximo 50 caracteres', 'ADD', 'nuevo_site_east_photo_nombrefoto_max_size_KO', 'El nombre debe contener máximo 50 caracteres.'],
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 119, 'Validar que el fichero sea imagen', 'ADD', 'nuevo_site_east_photo_format_KO', 'El fichero debe ser imagen.'],
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 120, 'Validar tamaño máximo 2MB', 'ADD', 'nuevo_site_east_photo_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 121, 'Validar correcto', 'ADD', true, 'Correcto.'],

  // EDIT
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 122, 'Validar que el campo no esté vacío', 'EDIT', 'nuevo_site_east_photo_vacio_KO', 'Complete el campo'],
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 123, 'Validar que el nombre tenga solo alfanuméricos, ñ, acentos y sin espacios', 'EDIT', 'nuevo_site_east_photo_nombrefoto_format_KO', 'El formato debe ser alfanumérico, con ñ y acentos, sin espacios.'],
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 124, 'Validar nombre mínimo 1 carácter', 'EDIT', 'nuevo_site_east_photo_nombrefoto_min_size_KO', 'El nombre debe contener mínimo 1 carácter.'],
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 125, 'Validar nombre máximo 50 caracteres', 'EDIT', 'nuevo_site_east_photo_nombrefoto_max_size_KO', 'El nombre debe contener máximo 50 caracteres.'],
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 126, 'Validar que el fichero sea imagen', 'EDIT', 'nuevo_site_east_photo_format_KO', 'El fichero debe ser imagen.'],
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 127, 'Validar tamaño máximo 2MB', 'EDIT', 'nuevo_site_east_photo_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
  ["ubicacion", 'nuevo_site_east_photo', 'inputfile', 128, 'Validar correcto', 'EDIT', true, 'Correcto.'],

  // SEARCH
  ["ubicacion", 'site_east_photo', 'input', 129, 'Validar que esté vacío o nombre con alfanuméricos, ñ, acentos y sin espacios', 'SEARCH', 'site_east_photo_nombrefoto_format_KO', 'El formato debe ser alfanumérico, con ñ y acentos, sin espacios.'],
  ["ubicacion", 'site_east_photo', 'input', 130, 'Validar nombre máximo 50 caracteres', 'SEARCH', 'site_east_photo_nombrefoto_max_size_KO', 'El nombre debe contener máximo 50 caracteres.'],
  ["ubicacion", 'site_east_photo', 'input', 131, 'Validar correcto', 'SEARCH', true, 'Correcto.'],

  // ---------- SITE_WEST_PHOTO ----------
  // ADD
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 132, 'Validar que el campo no esté vacío', 'ADD', 'nuevo_site_west_photo_vacio_KO', 'Complete el campo'],
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 133, 'Validar que el nombre tenga solo alfanuméricos, ñ, acentos y sin espacios', 'ADD', 'nuevo_site_west_photo_nombrefoto_format_KO', 'El formato debe ser alfanumérico, con ñ y acentos, sin espacios.'],
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 134, 'Validar nombre mínimo 1 carácter', 'ADD', 'nuevo_site_west_photo_nombrefoto_min_size_KO', 'El nombre debe contener mínimo 1 carácter.'],
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 135, 'Validar nombre máximo 50 caracteres', 'ADD', 'nuevo_site_west_photo_nombrefoto_max_size_KO', 'El nombre debe contener máximo 50 caracteres.'],
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 136, 'Validar que el fichero sea imagen', 'ADD', 'nuevo_site_west_photo_format_KO', 'El fichero debe ser imagen.'],
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 137, 'Validar tamaño máximo 2MB', 'ADD', 'nuevo_site_west_photo_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 138, 'Validar correcto', 'ADD', true, 'Correcto.'],

  // EDIT
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 139, 'Validar que el campo no esté vacío', 'EDIT', 'nuevo_site_west_photo_vacio_KO', 'Complete el campo'],
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 140, 'Validar que el nombre tenga solo alfanuméricos, ñ, acentos y sin espacios', 'EDIT', 'nuevo_site_west_photo_nombrefoto_format_KO', 'El formato debe ser alfanumérico, con ñ y acentos, sin espacios.'],
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 141, 'Validar nombre mínimo 1 carácter', 'EDIT', 'nuevo_site_west_photo_nombrefoto_min_size_KO', 'El nombre debe contener mínimo 1 carácter.'],
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 142, 'Validar nombre máximo 50 caracteres', 'EDIT', 'nuevo_site_west_photo_nombrefoto_max_size_KO', 'El nombre debe contener máximo 50 caracteres.'],
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 143, 'Validar que el fichero sea imagen', 'EDIT', 'nuevo_site_west_photo_format_KO', 'El fichero debe ser imagen.'],
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 144, 'Validar tamaño máximo 2MB', 'EDIT', 'nuevo_site_west_photo_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
  ["ubicacion", 'nuevo_site_west_photo', 'inputfile', 145, 'Validar correcto', 'EDIT', true, 'Correcto.'],

  // SEARCH
  ["ubicacion", 'site_west_photo', 'input', 146, 'Validar que esté vacío o nombre con alfanuméricos, ñ, acentos y sin espacios', 'SEARCH', 'site_west_photo_nombrefoto_format_KO', 'El formato debe ser alfanumérico, con ñ y acentos, sin espacios.'],
  ["ubicacion", 'site_west_photo', 'input', 147, 'Validar nombre máximo 50 caracteres', 'SEARCH', 'site_west_photo_nombrefoto_max_size_KO', 'El nombre debe contener máximo 50 caracteres.'],
  ["ubicacion", 'site_west_photo', 'input', 148, 'Validar correcto', 'SEARCH', true, 'Correcto.'],

];





let ubicacion_tests_fields = [
/*
  // ADD
  ["ubicacion", 'id_site', 1, 1, 'ADD', [{ id_site: '' }], 'id_site_vacio_KO'],                 // vacío
  ["ubicacion", 'id_site', 2, 2, 'ADD', [{ id_site: 'abc' }], 'id_site_format_KO'],             // letras
  ["ubicacion", 'id_site', 2, 3, 'ADD', [{ id_site: '123a' }], 'id_site_format_KO'],            // número + letra
  ["ubicacion", 'id_site', 2, 4, 'ADD', [{ id_site: '12_34' }], 'id_site_format_KO'],           // guion bajo
  ["ubicacion", 'id_site', 2, 5, 'ADD', [{ id_site: '12-34' }], 'id_site_format_KO'],           // guion
  ["ubicacion", 'id_site', 2, 6, 'ADD', [{ id_site: '12.34' }], 'id_site_format_KO'],           // punto
  ["ubicacion", 'id_site', 3, 7, 'ADD', [{ id_site: '1' }], true],                               // mínimo
  ["ubicacion", 'id_site', 4, 8, 'ADD', [{ id_site: '123456789012' }], 'id_site_max_size_KO'],  // máximo
  ["ubicacion", 'id_site', 5, 9, 'ADD', [{ id_site: '123456' }], true],                          // correcto

  // EDIT
  ["ubicacion", 'id_site', 6, 10, 'EDIT', [{ id_site: '' }], 'id_site_vacio_KO'],
  ["ubicacion", 'id_site', 7, 11, 'EDIT', [{ id_site: 'abc' }], 'id_site_format_KO'],
  ["ubicacion", 'id_site', 7, 12, 'EDIT', [{ id_site: '123a' }], 'id_site_format_KO'],
  ["ubicacion", 'id_site', 7, 13, 'EDIT', [{ id_site: '12_34' }], 'id_site_format_KO'],
  ["ubicacion", 'id_site', 8, 14, 'EDIT', [{ id_site: '1' }], true],
  ["ubicacion", 'id_site', 9, 15, 'EDIT', [{ id_site: '123456789012' }], 'id_site_max_size_KO'],
  ["ubicacion", 'id_site', 10, 16, 'EDIT', [{ id_site: '123456' }], true],
*/
  // SEARCH
  ["ubicacion", 'id_site', 11, 17, 'SEARCH', [{ id_site: 'abc' }], 'id_site_format_KO'],
  ["ubicacion", 'id_site', 11, 18, 'SEARCH', [{ id_site: '123a' }], 'id_site_format_KO'],
  ["ubicacion", 'id_site', 11, 19, 'SEARCH', [{ id_site: '12_34' }], 'id_site_format_KO'],
  ["ubicacion", 'id_site', 12, 20, 'SEARCH', [{ id_site: '123456789012' }], 'id_site_max_size_KO'],
  ["ubicacion", 'id_site', 13, 21, 'SEARCH', [{ id_site: '123456' }], true],


  // ADD site_latitud
  ["ubicacion", 'site_latitud', 14, 22, 'ADD', [{ site_latitud: '' }], 'site_latitud_vacio_KO'],          // vacío
  ["ubicacion", 'site_latitud', 15, 23, 'ADD', [{ site_latitud: 'abc' }], 'site_latitud_format_KO'],     // no numérico
  ["ubicacion", 'site_latitud', 15, 24, 'ADD', [{ site_latitud: '12,34' }], 'site_latitud_format_KO'],   // coma
  ["ubicacion", 'site_latitud', 15, 25, 'ADD', [{ site_latitud: '12a34' }], 'site_latitud_format_KO'],   // letras y números
  ["ubicacion", 'site_latitud', 15, 26, 'ADD', [{ site_latitud: '12.34.56' }], 'site_latitud_format_KO'],// doble punto
  ["ubicacion", 'site_latitud', 16, 27, 'ADD', [{ site_latitud: '-100' }], 'site_latitud_range_KO'],     // fuera de rango
  ["ubicacion", 'site_latitud', 17, 28, 'ADD', [{ site_latitud: '12.1234567' }], 'site_latitud_decimals_KO'], // >6 decimales
  ["ubicacion", 'site_latitud', 18, 29, 'ADD', [{ site_latitud: '45.123456' }], true],                   // correcto

  // EDIT site_latitud
  ["ubicacion", 'site_latitud', 19, 30, 'EDIT', [{ site_latitud: '' }], 'site_latitud_vacio_KO'],
  ["ubicacion", 'site_latitud', 20, 31, 'EDIT', [{ site_latitud: 'abc' }], 'site_latitud_format_KO'],
  ["ubicacion", 'site_latitud', 20, 32, 'EDIT', [{ site_latitud: '12,34' }], 'site_latitud_format_KO'],
  ["ubicacion", 'site_latitud', 20, 33, 'EDIT', [{ site_latitud: '12a34' }], 'site_latitud_format_KO'],
  ["ubicacion", 'site_latitud', 20, 34, 'EDIT', [{ site_latitud: '12.34.56' }], 'site_latitud_format_KO'],
  ["ubicacion", 'site_latitud', 21, 35, 'EDIT', [{ site_latitud: '-100' }], 'site_latitud_range_KO'],
  ["ubicacion", 'site_latitud', 22, 36, 'EDIT', [{ site_latitud: '12.1234567' }], 'site_latitud_decimals_KO'],
  ["ubicacion", 'site_latitud', 23, 37, 'EDIT', [{ site_latitud: '45.123456' }], true],

  // SEARCH site_latitud
  ["ubicacion", 'site_latitud', 24, 38, 'SEARCH', [{ site_latitud: 'abc' }], 'site_latitud_format_KO'],
  ["ubicacion", 'site_latitud', 24, 39, 'SEARCH', [{ site_latitud: '12,34' }], 'site_latitud_format_KO'],
  ["ubicacion", 'site_latitud', 24, 40, 'SEARCH', [{ site_latitud: '12a34' }], 'site_latitud_format_KO'],
  ["ubicacion", 'site_latitud', 25, 41, 'SEARCH', [{ site_latitud: '-100' }], 'site_latitud_range_KO'],
  ["ubicacion", 'site_latitud', 26, 42, 'SEARCH', [{ site_latitud: '12.1234567' }], 'site_latitud_decimals_KO'],
  ["ubicacion", 'site_latitud', 27, 43, 'SEARCH', [{ site_latitud: '45.123456' }], true],


  // ---------- SITE_LONGITUD ----------
  // ADD
  ["ubicacion", 'site_longitud', 28, 44, 'ADD', [{ site_longitud: '' }], 'site_longitud_vacio_KO'],
  ["ubicacion", 'site_longitud', 29, 45, 'ADD', [{ site_longitud: 'abc' }], 'site_longitud_format_KO'],
  ["ubicacion", 'site_longitud', 29, 46, 'ADD', [{ site_longitud: '12.34.56' }], 'site_longitud_format_KO'],
  ["ubicacion", 'site_longitud', 29, 47, 'ADD', [{ site_longitud: '-180,123' }], 'site_longitud_format_KO'],
  ["ubicacion", 'site_longitud', 30, 48, 'ADD', [{ site_longitud: '-190' }], 'site_longitud_range_KO'],
  ["ubicacion", 'site_longitud', 30, 49, 'ADD', [{ site_longitud: '181' }], 'site_longitud_range_KO'],
  ["ubicacion", 'site_longitud', 31, 50, 'ADD', [{ site_longitud: '12.1234567' }], 'site_longitud_decimals_KO'],
  ["ubicacion", 'site_longitud', 32, 51, 'ADD', [{ site_longitud: '45.123456' }], true],

  // EDIT
  ["ubicacion", 'site_longitud', 33, 52, 'EDIT', [{ site_longitud: '' }], 'site_longitud_vacio_KO'],
  ["ubicacion", 'site_longitud', 34, 53, 'EDIT', [{ site_longitud: 'xyz' }], 'site_longitud_format_KO'],
  ["ubicacion", 'site_longitud', 34, 54, 'EDIT', [{ site_longitud: '12..45' }], 'site_longitud_format_KO'],
  ["ubicacion", 'site_longitud', 34, 55, 'EDIT', [{ site_longitud: '-181' }], 'site_longitud_range_KO'],
  ["ubicacion", 'site_longitud', 35, 56, 'EDIT', [{ site_longitud: '182' }], 'site_longitud_range_KO'],
  ["ubicacion", 'site_longitud', 36, 57, 'EDIT', [{ site_longitud: '23.1234567' }], 'site_longitud_decimals_KO'],
  ["ubicacion", 'site_longitud', 37, 58, 'EDIT', [{ site_longitud: '60.123456' }], true],

  // SEARCH
  ["ubicacion", 'site_longitud', 38, 59, 'SEARCH', [{ site_longitud: 'abc' }], 'site_longitud_format_KO'],
  ["ubicacion", 'site_longitud', 38, 60, 'SEARCH', [{ site_longitud: '12.12.12' }], 'site_longitud_format_KO'],
  ["ubicacion", 'site_longitud', 39, 61, 'SEARCH', [{ site_longitud: '-190' }], 'site_longitud_range_KO'],
  ["ubicacion", 'site_longitud', 40, 62, 'SEARCH', [{ site_longitud: '185' }], 'site_longitud_range_KO'],
  ["ubicacion", 'site_longitud', 41, 63, 'SEARCH', [{ site_longitud: '34.1234567' }], 'site_longitud_decimals_KO'],
  ["ubicacion", 'site_longitud', 41, 64, 'SEARCH', [{ site_longitud: '90.123456' }], true],


  // ---------- SITE_ALTITUDE ----------
  // ADD
  ["ubicacion", 'site_altitude', 42, 65, 'ADD', [{ site_altitude: '' }], 'site_altitude_vacio_KO'],
  ["ubicacion", 'site_altitude', 43, 66, 'ADD', [{ site_altitude: '12a' }], 'site_altitude_format_KO'],
 // ["ubicacion", 'site_altitude', 44, 67, 'ADD', [{ site_altitude: '' }], 'site_altitude_min_size_KO'],
  ["ubicacion", 'site_altitude', 45, 68, 'ADD', [{ site_altitude: '12345' }], 'site_altitude_max_size_KO'],
  ["ubicacion", 'site_altitude', 46, 69, 'ADD', [{ site_altitude: '123' }], true],

  // EDIT
  ["ubicacion", 'site_altitude', 47, 70, 'EDIT', [{ site_altitude: '' }], 'site_altitude_vacio_KO'],
  ["ubicacion", 'site_altitude', 48, 71, 'EDIT', [{ site_altitude: '12b' }], 'site_altitude_format_KO'],
  //["ubicacion", 'site_altitude', 49, 72, 'EDIT', [{ site_altitude: '' }], 'site_altitude_min_size_KO'],
  ["ubicacion", 'site_altitude', 50, 73, 'EDIT', [{ site_altitude: '12345' }], 'site_altitude_max_size_KO'],
  ["ubicacion", 'site_altitude', 51, 74, 'EDIT', [{ site_altitude: '100' }], true],

  // SEARCH
  ["ubicacion", 'site_altitude', 52, 75, 'SEARCH', [{ site_altitude: '12c' }], 'site_altitude_format_KO'],
  ["ubicacion", 'site_altitude', 53, 76, 'SEARCH', [{ site_altitude: '12345' }], 'site_altitude_max_size_KO'],
  ["ubicacion", 'site_altitude', 54, 77, 'SEARCH', [{ site_altitude: '80' }], true],


  // ---------- SITE_LOCALITY ----------
  // ADD
  ["ubicacion", 'site_locality', 55, 78, 'ADD', [{ site_locality: '' }], 'site_locality_vacio_KO'],
  ["ubicacion", 'site_locality', 56, 79, 'ADD', [{ site_locality: '123' }], 'site_locality_format_KO'],
  ["ubicacion", 'site_locality', 56, 80, 'ADD', [{ site_locality: 'C!udad' }], 'site_locality_format_KO'],
  ["ubicacion", 'site_locality', 56, 81, 'ADD', [{ site_locality: 'Ciudad123' }], 'site_locality_format_KO'],
  ["ubicacion", 'site_locality', 57, 82, 'ADD', [{ site_locality: 'A' }], 'site_locality_min_size_KO'],
  ["ubicacion", 'site_locality', 58, 83, 'ADD', [{ site_locality: 'A'.repeat(41) }], 'site_locality_max_size_KO'],
  ["ubicacion", 'site_locality', 59, 84, 'ADD', [{ site_locality: 'Barcelona' }], true],

  // EDIT
  ["ubicacion", 'site_locality', 60, 85, 'EDIT', [{ site_locality: '' }], 'site_locality_vacio_KO'],
  ["ubicacion", 'site_locality', 61, 86, 'EDIT', [{ site_locality: '456' }], 'site_locality_format_KO'],
  ["ubicacion", 'site_locality', 61, 87, 'EDIT', [{ site_locality: 'Val!encia' }], 'site_locality_format_KO'],
  ["ubicacion", 'site_locality', 62, 88, 'EDIT', [{ site_locality: 'M1drid' }], 'site_locality_format_KO'],
  ["ubicacion", 'site_locality', 63, 89, 'EDIT', [{ site_locality: 'Z' }], 'site_locality_min_size_KO'],
  ["ubicacion", 'site_locality', 64, 90, 'EDIT', [{ site_locality: 'B'.repeat(41) }], 'site_locality_max_size_KO'],
  ["ubicacion", 'site_locality', 64, 91, 'EDIT', [{ site_locality: 'Madrid' }], true],

  // SEARCH
  ["ubicacion", 'site_locality', 65, 92, 'SEARCH', [{ site_locality: '123' }], 'site_locality_format_KO'],
  ["ubicacion", 'site_locality', 65, 93, 'SEARCH', [{ site_locality: 'Sevill@' }], 'site_locality_format_KO'],
  ["ubicacion", 'site_locality', 66, 94, 'SEARCH', [{ site_locality: 'Z'.repeat(41) }], 'site_locality_max_size_KO'],
  ["ubicacion", 'site_locality', 67, 95, 'SEARCH', [{ site_locality: 'Valencia' }], true],



  // ---------- SITE_PROVIDER_LOGIN ----------
  // ADD
  ["ubicacion", 'site_provider_login', 68, 96, 'ADD', [{ site_provider_login: '' }], 'site_provider_login_vacio_KO'],
  ["ubicacion", 'site_provider_login', 69, 97, 'ADD', [{ site_provider_login: 'abc@' }], 'site_provider_login_format_KO'],
  ["ubicacion", 'site_provider_login', 69, 98, 'ADD', [{ site_provider_login: '12 34' }], 'site_provider_login_format_KO'],
  ["ubicacion", 'site_provider_login', 69, 99, 'ADD', [{ site_provider_login: 'ab$c' }], 'site_provider_login_format_KO'],
  ["ubicacion", 'site_provider_login', 69, 100, 'ADD', [{ site_provider_login: 'user!name' }], 'site_provider_login_format_KO'],
  ["ubicacion", 'site_provider_login', 70, 101, 'ADD', [{ site_provider_login: 'abc' }], 'site_provider_login_min_size_KO'],
  ["ubicacion", 'site_provider_login', 71, 102, 'ADD', [{ site_provider_login: 'a'.repeat(31) }], 'site_provider_login_max_size_KO'],
  ["ubicacion", 'site_provider_login', 72, 103, 'ADD', [{ site_provider_login: 'usuario_01' }], true],

  // EDIT
  ["ubicacion", 'site_provider_login', 73, 104, 'EDIT', [{ site_provider_login: '' }], 'site_provider_login_vacio_KO'],
  ["ubicacion", 'site_provider_login', 74, 105, 'EDIT', [{ site_provider_login: '12@34' }], 'site_provider_login_format_KO'],
  ["ubicacion", 'site_provider_login', 74, 106, 'EDIT', [{ site_provider_login: 'abc#def' }], 'site_provider_login_format_KO'],
  ["ubicacion", 'site_provider_login', 74, 107, 'EDIT', [{ site_provider_login: 'us$er' }], 'site_provider_login_format_KO'],
  ["ubicacion", 'site_provider_login', 75, 108, 'EDIT', [{ site_provider_login: 'ab' }], 'site_provider_login_min_size_KO'],
  ["ubicacion", 'site_provider_login', 76, 109, 'EDIT', [{ site_provider_login: 'b'.repeat(32) }], 'site_provider_login_max_size_KO'],
  ["ubicacion", 'site_provider_login', 77, 110, 'EDIT', [{ site_provider_login: 'user_99' }], true],

  // SEARCH
  ["ubicacion", 'site_provider_login', 78, 111, 'SEARCH', [{ site_provider_login: 'abc@' }], 'site_provider_login_format_KO'],
  ["ubicacion", 'site_provider_login', 78, 112, 'SEARCH', [{ site_provider_login: '12 34' }], 'site_provider_login_format_KO'],
  ["ubicacion", 'site_provider_login', 78, 113, 'SEARCH', [{ site_provider_login: 'ab$c' }], 'site_provider_login_format_KO'],
  ["ubicacion", 'site_provider_login', 79, 114, 'SEARCH', [{ site_provider_login: 'a'.repeat(31) }], 'site_provider_login_max_size_KO'],
  ["ubicacion", 'site_provider_login', 80, 115, 'SEARCH', [{ site_provider_login: 'user_88' }], true],

  // ---------- SITE_NORTH_PHOTO ----------
  ["ubicacion", 'site_north_photo', 95, 116, 'SEARCH', [{ site_north_photo: '' }], true], // vacío
  ["ubicacion", 'site_north_photo', 95, 117, 'SEARCH', [{ site_north_photo: 'foto con espacios.jpg' }], 'site_north_photo_nombrefoto_format_KO'],
  ["ubicacion", 'site_north_photo', 95, 118, 'SEARCH', [{ site_north_photo: 'foto#123.jpg' }], 'site_north_photo_nombrefoto_format_KO'],
  ["ubicacion", 'site_north_photo', 95, 119, 'SEARCH', [{ site_north_photo: 'foto@ñá.jpg' }], 'site_north_photo_nombrefoto_format_KO'],
  ["ubicacion", 'site_north_photo', 96, 120, 'SEARCH', [{ site_north_photo: 'n'.repeat(51) + '.jpg' }], 'site_north_photo_nombrefoto_max_size_KO'], // max size
  ["ubicacion", 'site_north_photo', 97, 121, 'SEARCH', [{ site_north_photo: 'correcto_ñá.jpg' }], true], // correcto

  // ---------- SITE_SOUTH_PHOTO ----------
  ["ubicacion", 'site_south_photo', 112, 122, 'SEARCH', [{ site_south_photo: '' }], true], // vacío
  ["ubicacion", 'site_south_photo', 112, 123, 'SEARCH', [{ site_south_photo: 'nombre con espacios.jpg' }], 'site_south_photo_nombrefoto_format_KO'],
  ["ubicacion", 'site_south_photo', 112, 124, 'SEARCH', [{ site_south_photo: 'foto#invalido.jpg' }], 'site_south_photo_nombrefoto_format_KO'],
  ["ubicacion", 'site_south_photo', 113, 125, 'SEARCH', [{ site_south_photo: 'n'.repeat(51) + '.jpg' }], 'site_south_photo_nombrefoto_max_size_KO'], // max size
  ["ubicacion", 'site_south_photo', 114, 126, 'SEARCH', [{ site_south_photo: 'correcto_south.jpg' }], true], // correcto

  // ---------- SITE_EAST_PHOTO ----------
  ["ubicacion", 'site_east_photo', 129, 127, 'SEARCH', [{ site_east_photo: '' }], true], // vacío
  ["ubicacion", 'site_east_photo', 129, 128, 'SEARCH', [{ site_east_photo: 'espacios en el nombre.jpg' }], 'site_east_photo_nombrefoto_format_KO'],
  ["ubicacion", 'site_east_photo', 129, 129, 'SEARCH', [{ site_east_photo: 'foto#east.jpg' }], 'site_east_photo_nombrefoto_format_KO'],
  ["ubicacion", 'site_east_photo', 130, 130, 'SEARCH', [{ site_east_photo: 'n'.repeat(51) + '.jpg' }], 'site_east_photo_nombrefoto_max_size_KO'], // max size
  ["ubicacion", 'site_east_photo', 131, 131, 'SEARCH', [{ site_east_photo: 'correcto_east.jpg' }], true], // correcto

  // ---------- SITE_WEST_PHOTO ----------
  ["ubicacion", 'site_west_photo', 146, 132, 'SEARCH', [{ site_west_photo: '' }], true], // vacío
  ["ubicacion", 'site_west_photo', 146, 133, 'SEARCH', [{ site_west_photo: 'nombre west invalido.jpg' }], 'site_west_photo_nombrefoto_format_KO'],
  ["ubicacion", 'site_west_photo', 146, 134, 'SEARCH', [{ site_west_photo: 'foto#west.jpg' }], 'site_west_photo_nombrefoto_format_KO'],
  ["ubicacion", 'site_west_photo', 147, 135, 'SEARCH', [{ site_west_photo: 'n'.repeat(51) + '.jpg' }], 'site_west_photo_nombrefoto_max_size_KO'], // max size
  ["ubicacion", 'site_west_photo', 148, 136, 'SEARCH', [{ site_west_photo: 'correcto_west.jpg' }], true] // correcto

];


let ubicacion_tests_files = [
  // ------------------- NUEVO SITE NORTH PHOTO -------------------
  // ADD 
  ["ubicacion", 'nuevo_site_north_photo', 81, 1, 'ADD', 'existe', [], 'nuevo_site_north_photo_vacio_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 82, 2, 'ADD', 'format_name_file', [{ format_name_file: 'nombre_con_guion.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 82, 3, 'ADD', 'format_name_file', [{ format_name_file: 'nombre#especial.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 82, 4, 'ADD', 'format_name_file', [{ format_name_file: 'nombre$%&.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 82, 5, 'ADD', 'format_name_file', [{ format_name_file: 'nombre con espacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 82, 6, 'ADD', 'format_name_file', [{ format_name_file: 'nombre*asterisco.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 83, 7, 'ADD', 'format_name_file', [{ format_name_file: '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_min_size_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 84, 8, 'ADD', 'format_name_file', [{ format_name_file: 'n'.repeat(51) + '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_max_size_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 85, 9, 'ADD', 'format_name_file', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'application/pdf' }, { max_size_file: 5 }], 'nuevo_site_north_photo_format_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 86, 10, 'ADD', 'format_name_file', [{ format_name_file: 'nombreValido.jpg'  }, { type_file: 'image/jpeg' }, { max_size_file: 21000000 }], 'nuevo_site_north_photo_max_size_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 87, 11, 'ADD', 'correcto', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], true],

  // EDIT - FORMATO (varias pruebas)
  ["ubicacion", 'nuevo_site_north_photo', 88, 12, 'EDIT', 'existe', [], 'nuevo_site_north_photo_vacio_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 89, 13, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre_con_guion.jpeg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 89, 14, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre#especial.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 89, 15, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre$%&.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 89, 16, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre con espacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 89, 17, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre*asterisco.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 90, 18, 'EDIT', 'format_name_file', [{ format_name_file: '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_min_size_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 91, 19, 'EDIT', 'format_name_file', [{ format_name_file: 'n'.repeat(51) + '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_north_photo_nombrefoto_max_size_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 92, 20, 'EDIT', 'format_name_file', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'application/pdf' }, { max_size_file: 5 }], 'nuevo_site_north_photo_format_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 93, 21, 'EDIT', 'format_name_file', [{ format_name_file: 'nombreValido.jpg'  }, { type_file: 'image/jpeg' }, { max_size_file: 21000000 }], 'nuevo_site_north_photo_max_size_KO'],
  ["ubicacion", 'nuevo_site_north_photo', 94, 22, 'EDIT', 'correcto', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], true],

  // ------------------- NUEVO SITE SOUTH PHOTO -------------------
  // ADD - 
  ["ubicacion", 'nuevo_site_south_photo', 98, 23, 'ADD', 'existe', [], 'nuevo_site_south_photo_vacio_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 99, 24, 'ADD', 'format_name_file', [{ format_name_file: 'nombre_con_guion.jpeg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 99, 25, 'ADD', 'format_name_file', [{ format_name_file: 'nombre#especial.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 99, 26, 'ADD', 'format_name_file', [{ format_name_file: 'nombre$%&.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 99, 27, 'ADD', 'format_name_file', [{ format_name_file: 'nombre con espacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 99, 28, 'ADD', 'format_name_file', [{ format_name_file: 'nombre*asterisco.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 100, 29, 'ADD', 'format_name_file', [{ format_name_file: '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_min_size_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 101, 30, 'ADD', 'format_name_file', [{ format_name_file: 'n'.repeat(51) + '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_max_size_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 102, 31, 'ADD', 'format_name_file', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'application/pdf' }, { max_size_file: 5 }], 'nuevo_site_south_photo_format_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 103, 32, 'ADD', 'format_name_file', [{ format_name_file: 'nombreValido.jpg'  }, { type_file: 'image/jpeg' }, { max_size_file: 21000000 }], 'nuevo_site_south_photo_max_size_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 104, 33, 'ADD', 'correcto', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], true],

  // EDIT -
  ["ubicacion", 'nuevo_site_south_photo', 105, 34, 'EDIT', 'existe', [], 'nuevo_site_south_photo_vacio_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 106, 35, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre_con_guion.jpeg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 106, 36, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre#especial.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 106, 37, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre$%&.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 106, 38, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre con espacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 106, 39, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre*asterisco.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_format_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 107, 40, 'EDIT', 'format_name_file', [{ format_name_file: '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_min_size_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 108, 41, 'EDIT', 'format_name_file', [{ format_name_file: 'n'.repeat(51) + '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_south_photo_nombrefoto_max_size_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 109,42, 'EDIT', 'format_name_file', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'application/pdf' }, { max_size_file: 5 }], 'nuevo_site_south_photo_format_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 110,43, 'EDIT', 'format_name_file', [{ format_name_file: 'nombreValido.jpg'  }, { type_file: 'image/jpeg' }, { max_size_file: 21000000 }], 'nuevo_site_south_photo_max_size_KO'],
  ["ubicacion", 'nuevo_site_south_photo', 111, 44, 'EDIT', 'correcto', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], true],
 
    // ------------------- NUEVO SITE EAST PHOTO -------------------
    // ADD
    //
    ["ubicacion", 'nuevo_site_east_photo', 115, 45, 'ADD', 'existe', [], 'nuevo_site_east_photo_vacio_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 116, 46, 'ADD', 'format_name_file', [{ format_name_file: 'nombre_con_guion.jpeg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 116, 47, 'ADD', 'format_name_file', [{ format_name_file: 'nombre#especial.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 116, 48, 'ADD', 'format_name_file', [{ format_name_file: 'nombre$%&.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 116, 49, 'ADD', 'format_name_file', [{ format_name_file: 'nombre con espacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 116, 50, 'ADD', 'format_name_file', [{ format_name_file: 'nombre*asterisco.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 117, 51, 'ADD', 'format_name_file', [{ format_name_file: '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_min_size_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 118, 52, 'ADD', 'format_name_file', [{ format_name_file: 'n'.repeat(51) + '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_max_size_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 119, 53, 'ADD', 'format_name_file', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/pdf' }, { max_size_file: 5 }], 'nuevo_site_east_photo_format_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 120, 54, 'ADD', 'format_name_file', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 21000000 }], 'nuevo_site_east_photo_max_size_KO'],  
    ["ubicacion", 'nuevo_site_east_photo', 121, 55, 'ADD', 'correcto', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], true],
  
    // EDIT 
    ["ubicacion", 'nuevo_site_east_photo', 122, 56, 'EDIT', 'existe', [], 'nuevo_site_east_photo_vacio_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 122, 57, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre_con_guion.jpeg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 122, 58, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre#especial.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 122, 59, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre$%&.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 122, 60, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre con espacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 122, 61, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre*asterisco.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 123, 62, 'EDIT', 'format_name_file', [{ format_name_file: '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_min_size_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 124, 63, 'EDIT', 'format_name_file', [{ format_name_file: 'n'.repeat(51) + '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_east_photo_nombrefoto_max_size_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 125, 64, 'EDIT', 'format_name_file', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/pdf' }, { max_size_file: 5 }], 'nuevo_site_east_photo_format_KO'],
    ["ubicacion", 'nuevo_site_east_photo', 126, 65, 'EDIT', 'format_name_file', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 21000000 }], 'nuevo_site_east_photo_max_size_KO'], 
    ["ubicacion", 'nuevo_site_east_photo', 127, 66, 'EDIT', 'correcto', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], true],
  
    // ------------------- NUEVO SITE WEST PHOTO -------------------
    // ADD 
    ["ubicacion", 'nuevo_site_west_photo', 132, 67, 'ADD', 'existe', [], 'nuevo_site_west_photo_vacio_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 133, 68, 'ADD', 'format_name_file', [{ format_name_file: 'nombre_con_guion.jpeg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 133, 69, 'ADD', 'format_name_file', [{ format_name_file: 'nombre#especial.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 133, 70, 'ADD', 'format_name_file', [{ format_name_file: 'nombre$%&.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 133, 71, 'ADD', 'format_name_file', [{ format_name_file: 'nombre con espacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 133, 72, 'ADD', 'format_name_file', [{ format_name_file: 'nombre*asterisco.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 134, 73, 'ADD', 'format_name_file', [{ format_name_file: '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_min_size_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 135, 74, 'ADD', 'format_name_file', [{ format_name_file: 'n'.repeat(51) + '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_max_size_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 136, 75, 'ADD', 'format_name_file', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/pdf' }, { max_size_file: 5 }], 'nuevo_site_west_photo_format_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 137, 76, 'ADD', 'format_name_file', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 21000000 }], 'nuevo_site_west_photo_max_size_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 138, 77, 'ADD', 'correcto', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], true],
  
    // EDIT 
    ["ubicacion", 'nuevo_site_west_photo', 139, 78, 'EDIT', 'existe', [], 'nuevo_site_west_photo_vacio_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 140, 79, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre_con_guion.jpeg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 140, 80, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre#especial.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 140, 81, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre$%&.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 140, 82, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre con espacios.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 140, 83, 'EDIT', 'format_name_file', [{ format_name_file: 'nombre*asterisco.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_format_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 141, 84, 'EDIT', 'format_name_file', [{ format_name_file: '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_min_size_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 142, 85, 'EDIT', 'format_name_file', [{ format_name_file: 'n'.repeat(51) + '.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], 'nuevo_site_west_photo_nombrefoto_max_size_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 143, 86, 'EDIT', 'format_name_file', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/pdf' }, { max_size_file: 5 }], 'nuevo_site_west_photo_format_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 144, 87, 'EDIT', 'format_name_file', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 21000000 }], 'nuevo_site_west_photo_max_size_KO'],
    ["ubicacion", 'nuevo_site_west_photo', 145, 88, 'EDIT', 'correcto', [{ format_name_file: 'nombreValido.jpg' }, { type_file: 'image/jpeg' }, { max_size_file: 5 }], true],
  
  
];

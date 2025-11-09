let alumnograduacion_def_tests = Array(
  Array('alumnograduacion', 'login', 1, 'comprobar tamaño mínimo de caracteres', 'ADD', 'login_min_size_KO', 'No está permitido crear un login de tamaño menor a 4 caracteres.'),
  Array('alumnograduacion', 'login', 2, 'comprobar tamaño máximo de caracteres', 'ADD', 'login_max_size_KO', 'No está permitido crear un login de tamaño mayor a 15 caracteres.'),
  Array('alumnograduacion', 'login', 3, 'comprobar formato', 'ADD', 'login_format_KO', 'No está permitido crear un login con esas letras, sólo se permite caracteres alfabéticos sin acentos ni ñ.'),
  Array('alumnograduacion', 'login', 4, 'comprobar valores', 'ADD', true, 'Login correcto'),

  Array('alumnograduacion', 'login', 5, 'comprobar tamaño mínimo de caracteres', 'EDIT', 'login_min_size_KO', 'No está permitido cambiar a un login de tamaño menor a 4 caracteres.'),
  Array('alumnograduacion', 'login', 6, 'comprobar tamaño máximo de caracteres', 'EDIT', 'login_max_size_KO', 'No está permitido cambiar a un login de tamaño mayor a 15 caracteres.'),
  Array('alumnograduacion', 'login', 7, 'comprobar formato', 'EDIT', 'login_format_KO', 'No está permitido cambiar a un login con esas letras, sólo se permite caracteres alfabéticos sin acentos ni ñ.'),
  Array('alumnograduacion', 'login', 8, 'comprobar valores', 'EDIT', true, 'Login correcto'),

  Array('alumnograduacion', 'login', 9, 'comprobar tamaño máximo de caracteres', 'SEARCH', 'login_max_size_KO', 'No existe ningún login de tamaño mayor a 15 caracteres.'),
  Array('alumnograduacion', 'login', 10, 'comprobar formato', 'SEARCH', 'login_format_KO', 'No existe ningún login con esas letras, sólo se permite caracteres alfabéticos sin acentos ni ñ.'),
  Array('alumnograduacion', 'login', 11, 'comprobar valores', 'SEARCH', true, 'Login correcto'),

  Array('alumnograduacion', 'password', 12, 'comprobar tamaño mínimo de caracteres', 'ADD', 'password_min_size_KO', 'No está permitido crear una contraseña de tamaño menor a 8 caracteres.'),
  Array('alumnograduacion', 'password', 13, 'comprobar tamaño máximo de caracteres', 'ADD', 'password_max_size_KO', 'No está permitido crear una contraseña de tamaño mayor a 64 caracteres.'),
  Array('alumnograduacion', 'password', 14, 'comprobar formato', 'ADD', 'password_format_KO', 'No está permitido crear una contraseña con esas letras, sólo se permite caracteres alfabéticos y espacios, sin acentos ni ñ.'),
  Array('alumnograduacion', 'password', 15, 'comprobar valores', 'ADD', true, 'Password correcto'),

  Array('alumnograduacion', 'password', 16, 'comprobar tamaño mínimo de caracteres', 'EDIT', 'password_min_size_KO', 'No está permitido cambiar a una contraseña de tamaño menor a 8 caracteres.'),
  Array('alumnograduacion', 'password', 17, 'comprobar tamaño máximo de caracteres', 'EDIT', 'password_max_size_KO', 'No está permitido cambiar a una contraseña de tamaño mayor a 64 caracteres.'),
  Array('alumnograduacion', 'password', 18, 'comprobar formato', 'EDIT', 'password_format_KO', 'No está permitido cambiar a una contraseña con esas letras, sólo se permite caracteres alfabéticos y espacios, sin acentos ni ñ.'),
  Array('alumnograduacion', 'password', 19, 'comprobar valores', 'EDIT', true, 'Password correcto'),

  Array('alumnograduacion', 'nombre', 20, 'comprobar tamaño mínimo de caracteres', 'ADD', 'nombre_min_size_KO', 'No está permitido poner un nombre que tenga tamaño menor a 2 caracteres.'),
  Array('alumnograduacion', 'nombre', 21, 'comprobar tamaño máximo de caracteres', 'ADD', 'nombre_max_size_KO', 'No está permitido poner un nombre que tenga tamaño mayor a 25 caracteres.'),
  Array('alumnograduacion', 'nombre', 22, 'comprobar formato', 'ADD', 'nombre_format_KO', 'No está permitido poner un nombre con esas letras, sólo se permite caracteres alfabéticos sin o con acentos, ñ y espacios.'),
  Array('alumnograduacion', 'nombre', 23, 'comprobar valores', 'ADD', true, 'Correcto nombre'),

  Array('alumnograduacion', 'nombre', 24, 'comprobar tamaño mínimo de caracteres', 'EDIT', 'nombre_min_size_KO', 'No está permitido cambiar a un nombre de tamaño menor a 2 caracteres.'),
  Array('alumnograduacion', 'nombre', 25, 'comprobar tamaño máximo de caracteres', 'EDIT', 'nombre_max_size_KO', 'No está permitido cambiar a un nombre de tamaño mayor a 25 caracteres.'),
  Array('alumnograduacion', 'nombre', 26, 'comprobar formato', 'EDIT', 'nombre_format_KO', 'No está permitido cambiar a un nombre con esas letras, sólo se permite caracteres alfabéticos sin o con acentos, ñ y espacios.'),
  Array('alumnograduacion', 'nombre', 27, 'comprobar valores', 'EDIT', true, 'Correcto nombre'),

  Array('alumnograduacion', 'nombre', 28, 'comprobar tamaño máximo de caracteres', 'SEARCH', 'nombre_max_size_KO', 'No existe ningún nombre de tamaño mayor a 25 caracteres.'),
  Array('alumnograduacion', 'nombre', 29, 'comprobar formato', 'SEARCH', 'nombre_format_KO', 'No existe ningún nombre con esas letras, sólo se permite caracteres alfabéticos sin o con acentos, ñ y espacios.'),
  Array('alumnograduacion', 'nombre', 30, 'comprobar valores', 'SEARCH', true, 'Correcto nombre'),

  Array('alumnograduacion', 'apellidos', 31, 'comprobar tamaño mínimo de caracteres', 'ADD', 'apellidos_min_size_KO', 'No está permitido poner unos apellidos que tengan tamaño menor a 2 caracteres.'),
  Array('alumnograduacion', 'apellidos', 32, 'comprobar tamaño máximo de caracteres', 'ADD', 'apellidos_max_size_KO', 'No está permitido poner unos apellidos que tengan tamaño mayor a 35 caracteres.'),
  Array('alumnograduacion', 'apellidos', 33, 'comprobar formato', 'ADD', 'apellidos_format_KO', 'No está permitido poner unos apellidos con esas letras, sólo se permite caracteres alfabéticos sin o con acentos, ñ y espacios.'),
  Array('alumnograduacion', 'apellidos', 34, 'comprobar valores', 'ADD', true, 'Correcto apellidos'),

  Array('alumnograduacion', 'apellidos', 35, 'comprobar tamaño mínimo de caracteres', 'EDIT', 'apellidos_min_size_KO', 'No está permitido cambiar a unos apellidos de tamaño menor a 2 caracteres.'),
  Array('alumnograduacion', 'apellidos', 36, 'comprobar tamaño máximo de caracteres', 'EDIT', 'apellidos_max_size_KO', 'No está permitido cambiar a unos apellidos de tamaño mayor a 35 caracteres.'),
  Array('alumnograduacion', 'apellidos', 37, 'comprobar formato', 'EDIT', 'apellidos_format_KO', 'No está permitido cambiar a unos apellidos con esas letras, sólo se permite caracteres alfabéticos sin o con acentos, ñ y espacios.'),
  Array('alumnograduacion', 'apellidos', 38, 'comprobar valores', 'EDIT', true, 'Correcto apellidos'),

  Array('alumnograduacion', 'apellidos', 39, 'comprobar tamaño máximo de caracteres', 'SEARCH', 'apellidos_max_size_KO', 'No existe ningún apellidos de tamaño mayor a 35 caracteres.'),
  Array('alumnograduacion', 'apellidos', 40, 'comprobar formato', 'SEARCH', 'apellidos_format_KO', 'No existe ningún apellidos con esas letras, sólo se permite caracteres alfabéticos sin o con acentos, ñ y espacios.'),
  Array('alumnograduacion', 'apellidos', 41, 'comprobar valores', 'SEARCH', true, 'Correcto apellidos'),

  Array('alumnograduacion', 'titulacion', 42, 'comprobar campo', 'ADD', 'titulacion_campo_KO', 'No está permitido que se introduzca algo distinto a GREI, GRIA, MEI, MIA o PCEO.'),
  Array('alumnograduacion', 'titulacion', 43, 'comprobar valores', 'ADD', true, 'Correcto titulación'),

  Array('alumnograduacion', 'titulacion', 44, 'comprobar campo', 'EDIT', 'titulacion_campo_KO', 'No está permitido que se introduzca algo distinto a GREI, GRIA, MEI, MIA o PCEO.'),
  Array('alumnograduacion', 'titulacion', 45, 'comprobar valores', 'EDIT', true, 'Correcto titulación'),

  Array('alumnograduacion', 'titulacion', 46, 'comprobar formato', 'SEARCH', 'titulacion_format_KO', 'No está permitido que se introduzca un trozo o un campo distinto a GREI, GRIA, MEI, MIA o PCEO.'),
  Array('alumnograduacion', 'titulacion', 47, 'comprobar valores', 'SEARCH', true, 'Correcto titulación'),

  Array('alumnograduacion', 'dni', 48, 'comprobar tamaño de caracteres', 'ADD', 'dni_size_KO', 'No está permitido poner un tamaño distinto a 9 caracteres.'),
  Array('alumnograduacion', 'dni', 49, 'comprobar formato', 'ADD', 'dni_format_KO', 'No está permitido que no sea formato DNI o NIE y que sus letras no sean las válidas.'),
  Array('alumnograduacion', 'dni', 50, 'comprobar valores', 'ADD', true, 'Correcto DNI/NIE'),

  Array('alumnograduacion', 'dni', 51, 'comprobar tamaño de caracteres', 'EDIT', 'dni_size_KO', 'No está permitido poner un tamaño distinto a 9 caracteres.'),
  Array('alumnograduacion', 'dni', 52, 'comprobar formato', 'EDIT', 'dni_format_KO', 'No está permitido que no sea formato DNI o NIE y que sus letras no sean las válidas.'),
  Array('alumnograduacion', 'dni', 53, 'comprobar valores', 'EDIT', true, 'Correcto DNI/NIE'),

  Array('alumnograduacion', 'dni', 54, 'comprobar formato', 'SEARCH', 'dni_format_KO', 'No está permitido que introduzcas caracteres que no sean posibles en un DNI o NIE ni que sea distinto a un trozo o todo del formato de un DNI o NIE, tampoco si has metido alguna letra que no sea valida al posible DNI o NIE que buscas.'),
  Array('alumnograduacion', 'dni', 55, 'comprobar valores', 'SEARCH', true, 'Correcto DNI/NE'),

  Array('alumnograduacion', 'telefono', 56, 'comprobar tamaño de caracteres', 'ADD', 'telefono_size_KO', 'No está permitido poner un telefono que no tenga sólo 9 números.'),
  Array('alumnograduacion', 'telefono', 57, 'comprobar formato', 'ADD', 'telefono_format_KO', 'No está permitido que sea sólo dígitos.'),
  Array('alumnograduacion', 'telefono', 58, 'comprobar valores', 'ADD', true, 'Correcto teléfono'),

  Array('alumnograduacion', 'telefono', 59, 'comprobar tamaño de caracteres', 'EDIT', 'telefono_size_KO', 'No está permitido poner un telefono que no tenga sólo 9 números.'),
  Array('alumnograduacion', 'telefono', 60, 'comprobar formato', 'EDIT', 'telefono_format_KO', 'No está permitido que sea sólo dígitos.'),
  Array('alumnograduacion', 'telefono', 61, 'comprobar valores', 'EDIT', true, 'Correcto teléfono'),

  Array('alumnograduacion', 'telefono', 62, 'comprobar formato', 'SEARCH', 'telefono_format_KO', 'No existe ningún teléfono que no sea sólo dígitos.'),
  Array('alumnograduacion', 'telefono', 63, 'comprobar valores', 'SEARCH', true, 'Correcto teléfono'),

  Array('alumnograduacion', 'direccion', 64, 'comprobar tamaño mínimo de caracteres', 'ADD', 'direccion_min_size_KO', 'No está permitido poner una direccion de tamaño menor a 25 caracteres.'),
  Array('alumnograduacion', 'direccion', 65, 'comprobar tamaño máximo de caracteres', 'ADD', 'direccion_max_size_KO', 'No está permitido poner una direccion de tamaño mayor a 100 caracteres.'),
  Array('alumnograduacion', 'direccion', 66, 'comprobar formato', 'ADD', 'direccion_format_KO', 'No está permitido poner una direccion que no sea con caracteres alfanúmericos sin o con acentos, ñ y espacios.'),
  Array('alumnograduacion', 'direccion', 67, 'comprobar valores', 'ADD', true, 'Correcto dirección'),

  Array('alumnograduacion', 'direccion', 68, 'comprobar tamaño mínimo de caracteres', 'EDIT', 'direccion_min_size_KO', 'No está permitido cambiar a una direccion de tamaño menor a 25 caracteres.'),
  Array('alumnograduacion', 'direccion', 69, 'comprobar tamaño máximo de caracteres', 'EDIT', 'direccion_max_size_KO', 'No está permitido cambiar a una direccion de tamaño mayor a 100 caracteres.'),
  Array('alumnograduacion', 'direccion', 70, 'comprobar formato', 'EDIT', 'direccion_format_KO', 'No está permitido cambiar una direccion que no sea con caracteres alfanúmericos sin o con acentos, ñ y espacios.'),
  Array('alumnograduacion', 'direccion', 71, 'comprobar valores', 'EDIT', true, 'Correcto dirección'),

  Array('alumnograduacion', 'direccion', 72, 'comprobar formato', 'SEARCH', 'direccion_format_KO', 'No existe ningún direccion con esas letras, sólo se permite caracteres alfanúmericos con o sin acentos, ñ y espacios.'),
  Array('alumnograduacion', 'direccion', 73, 'comprobar valores', 'SEARCH', true, 'Correcto dirección'),

  Array('alumnograduacion', 'email', 74, 'comprobar tamaño mínimo de caracteres', 'ADD', 'email_min_size_KO', 'No está permitido crear un email de tamaño menor a 6 caracteres.'),
  Array('alumnograduacion', 'email', 75, 'comprobar tamaño máximo de caracteres', 'ADD', 'email_max_size_KO', 'No está permitido crear un email de tamaño mayor a 40 caracteres.'),
  Array('alumnograduacion', 'email', 76, 'comprobar formato', 'ADD', 'email_format_KO', 'No está permitido crear un email que no sea formato email'),
  Array('alumnograduacion', 'email', 77, 'comprobar valores', 'ADD', true, 'Correcto email'),

  Array('alumnograduacion', 'email', 78, 'comprobar tamaño mínimo de caracteres', 'EDIT', 'email_min_size_KO', 'No está permitido cambiar a un email de tamaño menor a 6 caracteres.'),
  Array('alumnograduacion', 'email', 79, 'comprobar tamaño máximo de caracteres', 'EDIT', 'email_max_size_KO', 'No está permitido cambiar a un email de tamaño mayor a 40 caracteres.'),
  Array('alumnograduacion', 'email', 80, 'comprobar formato', 'EDIT', 'email_format_KO', 'No está permitido cambiar a un email con formato email'),
  Array('alumnograduacion', 'email', 81, 'comprobar valores', 'EDIT', true, 'Correcto email'),

  Array('alumnograduacion', 'email', 82, 'comprobar tamaño máximo', 'SEARCH', 'email_max_size_KO', 'No existe ningún email que tenga más de 40 caracteres.'),
  Array('alumnograduacion', 'email', 83, 'comprobar formato', 'SEARCH', 'email_format_KO', 'No está permitido cambiar a un email que no tenga formato email'),
  Array('alumnograduacion', 'email', 84, 'comprobar valores', 'SEARCH', true, 'Correcto email'),

  Array('alumnograduacion', 'nueva_fotoacto', 85, 'existe fichero', 'ADD', 'nueva_fotoacto_not_exist_file_KO', 'El fichero no existe. Por favor, suba una foto'),
  Array('alumnograduacion', 'nueva_fotoacto', 86, 'cumple nombre fichero', 'ADD', 'nueva_fotoacto_format_name_file_KO', 'El nombre de fichero no cumple formato, sólo se permite caracteres alfabéticos y ., sin acentos ni ñ ni espacios.'),
  Array('alumnograduacion', 'nueva_fotoacto', 87, 'cumple tipo fichero', 'ADD', 'nueva_fotoacto_type_file_KO', 'El tipo de fichero no está permitido, sólo está permitido JPG.'),
  Array('alumnograduacion', 'nueva_fotoacto', 88, 'cumple tamaño maximo fichero', 'ADD', 'nueva_fotoacto_max_size_file_KO', 'No se permite archivos de tamaño mayores o iguales a 2.000.000 B.'),
  Array('alumnograduacion', 'nueva_fotoacto', 89, 'cumple tamaño minimo nombre fichero', 'ADD', 'nueva_fotoacto_min_size_name_KO', 'No se permite que el nombre del archivo sea menor a 7 caracteres'),
  Array('alumnograduacion', 'nueva_fotoacto', 90, 'cumple tamaño maximo nombre fichero', 'ADD', 'nueva_fotoacto_max_size_name_KO', 'No se permite que el tamaño del nombre de fichero sea mayor a 40 caracteres.'),
  Array('alumnograduacion', 'nueva_fotoacto', 91, 'comprobar valores', 'ADD', true, 'Correcto nueva_fotoacto'),

  Array('alumnograduacion', 'nuevo_fotoacto', 92, 'no existe fichero', 'EDIT', true, 'ok'),
  Array('alumnograduacion', 'nueva_fotoacto', 93, 'cumple nombre fichero', 'EDIT', 'nueva_fotoacto_format_name_file_KO', 'El nombre de fichero no cumple formato, sólo se permite caracteres alfabéticos y ., sin acentos ni ñ ni espacios.'),
  Array('alumnograduacion', 'nueva_fotoacto', 94, 'cumple tipo fichero', 'EDIT', 'nueva_fotoacto_type_file_KO', 'El tipo de fichero no esta permitido, sólo está permitido JPG.'),
  Array('alumnograduacion', 'nueva_fotoacto', 95, 'cumple tamaño maximo fichero', 'EDIT', 'nueva_fotoacto_max_size_file_KO', 'No se permite archivos de tamaño mayores o iguales a 2.000.000 B.'),
  Array('alumnograduacion', 'nueva_fotoacto', 96, 'cumple tamaño minimo nombre fichero', 'EDIT', 'nueva_fotoacto_min_size_name_KO', 'No se permite que el nombre del archivo sea menor a 7 caracteres'),
  Array('alumnograduacion', 'nueva_fotoacto', 97, 'cumple tamaño maximo nombre fichero', 'EDIT', 'nueva_fotoacto_max_size_name_KO', 'No se permite que el tamaño del nombre de fichero sea mayor a 40 caracteres.'),
  Array('alumnograduacion', 'nueva_fotoacto', 98, 'comprobar valores', 'EDIT', true, 'Correcto nueva_fotoacto'),

  Array('alumnograduacion', 'password', 99, 'comprobar tamaño máximo de caracteres', 'SEARCH', 'password_max_size_KO', 'No existe una contraseña de tamaño mayor a 64 caracteres.'),
  Array('alumnograduacion', 'password', 100, 'comprobar formato', 'SEARCH', 'password_format_KO', 'No existe una contraseña con esas letras, sólo se permite caracteres alfabéticos y espacios, sin acentos ni ñ.'),
  Array('alumnograduacion', 'password', 101, 'comprobar valores', 'SEARCH', true, 'Correcto password'),

  Array('alumnograduacion', 'titulacion', 102, 'comprobar tamaño máximo de caracteres', 'SEARCH', 'titulacion_max_size_KO', 'No existe una titulación mayor a 4 caracteres (Sólo existe GREI, GRIA, MEI, MIA o PCEO).'),
  Array('alumnograduacion', 'dni', 103, 'comprobar tamaño máximo de caracteres', 'SEARCH', 'dni_size_KO', 'No existe un DNI o NIE con tamaño mayor a 9 caracteres.'),
  Array('alumnograduacion', 'telefono', 104, 'comprobar tamaño máximo de caracteres', 'SEARCH', 'telefono_max_size_KO', 'No existe un telefono que tenga más de 9 números.'),
  Array('alumnograduacion', 'direccion', 105, 'comprobar tamaño máximo de caracteres', 'SEARCH', 'direccion_max_size_KO', 'No existe una direccion de tamaño mayor a 100 caracteres.'),

  Array('alumnograduacion', 'fotoacto', 106, 'cumple nombre fichero', 'SEARCH', 'fotoacto_format_name_file_KO', 'El trozo o nombre de tu archivo de fichero no cumple el formato, sólo se permite caracteres alfabéticos y ., sin acentos ni ñ ni espacios.'),
  Array('alumnograduacion', 'fotoacto', 107, 'cumple tamaño maximo nombre fichero', 'SEARCH', 'fotoacto_max_size_name_KO', 'No existe un tamaño del nombre de fichero sea mayor a 40 caracteres.'),
  Array('alumnograduacion', 'fotoacto', 108, 'cumple tipo fichero', 'SEARCH', 'fotoacto_type_file_KO', 'El tipo de fichero no está permitido, sólo está permitido JPG.'),
  Array('alumnograduacion', 'fotoacto', 109, 'comprobar valores', 'SEARCH', true, 'Correcto fotoacto'),
);

let alumnograduacion_tests_fields = Array(

  Array("alumnograduacion", "login", 1, 1, "ADD", [{ login: "" }], "login_min_size_KO"),
  Array("alumnograduacion", "login", 1, 2, "ADD", [{ login: "aaa" }], "login_min_size_KO"),
  Array("alumnograduacion", "login", 2, 3, "ADD", [{ login: "a".repeat(16) }], "login_max_size_KO"),
  Array("alumnograduacion", "login", 3, 4, "ADD", [{ login: "####" }], "login_format_KO"),
  Array("alumnograduacion", "login", 4, 5, "ADD", [{ login: "anaMaria" }], true),

  Array("alumnograduacion", "login", 5, 6, "EDIT", [{ login: "" }], "login_min_size_KO"),
  Array("alumnograduacion", "login", 6, 7, "EDIT", [{ login: "a".repeat(16) }], "login_max_size_KO"),
  Array("alumnograduacion", "login", 7, 8, "EDIT", [{ login: "####" }], "login_format_KO"),
  Array("alumnograduacion", "login", 8, 9, "EDIT", [{ login: "anaMaria" }], true),

  Array("alumnograduacion", "login", 9, 10, "SEARCH", [{ login: "a".repeat(16) }], "login_max_size_KO"),
  Array("alumnograduacion", "login", 10, 11, "SEARCH", [{ login: "####" }], "login_format_KO"),
  Array("alumnograduacion", "login", 11, 12, "SEARCH", [{ login: "" }], true),

  Array("alumnograduacion", "password", 12, 13, "ADD", [{ password: "" }], "password_min_size_KO"),
  Array("alumnograduacion", "password", 12, 14, "ADD", [{ password: "a 2 b 4" }], "password_min_size_KO"),
  Array("alumnograduacion", "password", 13, 15, "ADD", [{ password: "x".repeat(65) }], "password_max_size_KO"),
  Array("alumnograduacion", "password", 14, 16, "ADD", [{ password: "ñ".repeat(8) }], "password_format_KO"),
  Array("alumnograduacion", "password", 15, 17, "ADD", [{ password: "a".repeat(8) }], true),

  Array("alumnograduacion", "password", 16, 18, "EDIT", [{ password: "" }], "password_min_size_KO"),
  Array("alumnograduacion", "password", 16, 19, "EDIT", [{ password: "a 2 b 4" }], "password_min_size_KO"),
  Array("alumnograduacion", "password", 17, 20, "EDIT", [{ password: "x".repeat(65) }], "password_max_size_KO"),
  Array("alumnograduacion", "password", 18, 21, "EDIT", [{ password: "ñ".repeat(11) }], "password_format_KO"),
  Array("alumnograduacion", "password", 19, 22, "EDIT", [{ password: "a".repeat(8) }], true),

  Array("alumnograduacion", "nombre", 20, 23, "ADD", [{ nombre: "" }], "nombre_min_size_KO"),
  Array("alumnograduacion", "nombre", 20, 24, "ADD", [{ nombre: "n" }], "nombre_min_size_KO"),
  Array("alumnograduacion", "nombre", 21, 25, "ADD", [{ nombre: "n".repeat(26) }], "nombre_max_size_KO"),
  Array("alumnograduacion", "nombre", 22, 26, "ADD", [{ nombre: "###" }], "nombre_format_KO"),
  Array("alumnograduacion", "nombre", 23, 26, "ADD", [{ nombre: "José" }], true),

  Array("alumnograduacion", "nombre", 24, 27, "EDIT", [{ nombre: "" }], "nombre_min_size_KO"),
  Array("alumnograduacion", "nombre", 24, 28, "EDIT", [{ nombre: "n" }], "nombre_min_size_KO"),
  Array("alumnograduacion", "nombre", 25, 29, "EDIT", [{ nombre: "n".repeat(26) }], "nombre_max_size_KO"),
  Array("alumnograduacion", "nombre", 26, 30, "EDIT", [{ nombre: "###" }], "nombre_format_KO"),
  Array("alumnograduacion", "nombre", 27, 31, "EDIT", [{ nombre: "José" }], true),

  Array("alumnograduacion", "nombre", 28, 32, "SEARCH", [{ nombre: "n".repeat(26) }], "nombre_max_size_KO"),
  Array("alumnograduacion", "nombre", 29, 33, "SEARCH", [{ nombre: "###" }], "nombre_format_KO"),
  Array("alumnograduacion", "nombre", 30, 34, "SEARCH", [{ nombre: "J" }], true),

  Array("alumnograduacion", "apellidos", 31, 35, "ADD", [{ apellidos: "" }], "apellidos_min_size_KO"),
  Array("alumnograduacion", "apellidos", 31, 37, "ADD", [{ apellidos: "a" }], "apellidos_min_size_KO"),
  Array("alumnograduacion", "apellidos", 32, 38, "ADD", [{ apellidos: "a".repeat(36) }], "apellidos_max_size_KO"),
  Array("alumnograduacion", "apellidos", 33, 39, "ADD", [{ apellidos: "###" }], "apellidos_format_KO"),
  Array("alumnograduacion", "apellidos", 34, 40, "ADD", [{ apellidos: "Fernández Fernández" }], true),

  Array("alumnograduacion", "apellidos", 35, 41, "EDIT", [{ apellidos: "" }], "apellidos_min_size_KO"),
  Array("alumnograduacion", "apellidos", 35, 42, "EDIT", [{ apellidos: "n" }], "apellidos_min_size_KO"),
  Array("alumnograduacion", "apellidos", 36, 43, "EDIT", [{ apellidos: "n".repeat(36) }], "apellidos_max_size_KO"),
  Array("alumnograduacion", "apellidos", 37, 44, "EDIT", [{ apellidos: "###" }], "apellidos_format_KO"),
  Array("alumnograduacion", "apellidos", 38, 45, "EDIT", [{ apellidos: "Fernández Fernández" }], true),

  Array("alumnograduacion", "apellidos", 39, 46, "SEARCH", [{ apellidos: "n".repeat(36) }], "apellidos_max_size_KO"),
  Array("alumnograduacion", "apellidos", 40, 47, "SEARCH", [{ apellidos: "###" }], "apellidos_format_KO"),
  Array("alumnograduacion", "apellidos", 41, 48, "SEARCH", [{ apellidos: "F" }], true),

  Array("alumnograduacion", "titulacion", 42, 49, "ADD", [{ titulacion: "GREE" }], "titulacion_campo_KO"),
  Array("alumnograduacion", "titulacion", 43, 50, "ADD", [{ titulacion: "GREI" }], true),

  Array("alumnograduacion", "titulacion", 44, 51, "EDIT", [{ titulacion: "GREE" }], "titulacion_format_KO"),
  Array("alumnograduacion", "titulacion", 45, 52, "EDIT", [{ titulacion: "GREI" }], true),

  Array("alumnograduacion", "titulacion", 46, 53, "SEARCH", [{ titulacion: "GREE" }], "titulacion_format_KO"),
  Array("alumnograduacion", "titulacion", 47, 54, "SEARCH", [{ titulacion: "GREI" }], true),

  Array("alumnograduacion", "dni", 48, 55, "ADD", [{ dni: "" }], "dni_size_KO"),
  Array("alumnograduacion", "dni", 48, 56, "ADD", [{ dni: "11111111" }], "dni_size_KO"),
  Array("alumnograduacion", "dni", 49, 57, "ADD", [{ dni: "#".repeat(9) }], "dni_format_KO"),
  Array("alumnograduacion", "dni", 49, 58, "ADD", [{ dni: "00000000R" }], "dni_format_KO"),
  Array("alumnograduacion", "dni", 49, 59, "ADD", [{ dni: "X0000000R" }], "dni_format_KO"),
  Array("alumnograduacion", "dni", 50, 60, "ADD", [{ dni: "00000000T" }], true),
  Array("alumnograduacion", "dni", 50, 61, "ADD", [{ dni: "X0000000T" }], true),

  Array("alumnograduacion", "dni", 51, 62, "EDIT", [{ dni: "" }], "dni_size_KO"),
  Array("alumnograduacion", "dni", 51, 63, "EDIT", [{ dni: "11111111" }], "dni_size_KO"),
  Array("alumnograduacion", "dni", 52, 64, "EDIT", [{ dni: "#".repeat(9) }], "dni_format_KO"),
  Array("alumnograduacion", "dni", 52, 65, "EDIT", [{ dni: "00000000R" }], "dni_format_KO"),
  Array("alumnograduacion", "dni", 52, 66, "EDIT", [{ dni: "X0000000R" }], "dni_format_KO"),
  Array("alumnograduacion", "dni", 53, 67, "EDIT", [{ dni: "00000000T" }], true),
  Array("alumnograduacion", "dni", 53, 68, "EDIT", [{ dni: "X0000000T" }], true),

  Array("alumnograduacion", "dni", 54, 67, "SEARCH", [{ dni: "X#000000" }], "dni_format_KO"),
  Array("alumnograduacion", "dni", 54, 68, "SEARCH", [{ dni: "A0000000" }], "dni_format_KO"),
  Array("alumnograduacion", "dni", 55, 69, "SEARCH", [{ dni: "00000T" }], true),
  Array("alumnograduacion", "dni", 55, 70, "SEARCH", [{ dni: "X000" }], true),

  Array("alumnograduacion", "telefono", 56, 71, "ADD", [{ telefono: "" }], "telefono_size_KO"),
  Array("alumnograduacion", "telefono", 56, 72, "ADD", [{ telefono: "00000000" }], "telefono_size_KO"),
  Array("alumnograduacion", "telefono", 57, 73, "ADD", [{ telefono: "aaaaaaaaa" }], "telefono_format_KO"),
  Array("alumnograduacion", "telefono", 58, 74, "ADD", [{ telefono: "000000000" }], true),

  Array("alumnograduacion", "telefono", 59, 75, "EDIT", [{ telefono: "" }], "telefono_size_KO"),
  Array("alumnograduacion", "telefono", 59, 76, "EDIT", [{ telefono: "00000000" }], "telefono_size_KO"),
  Array("alumnograduacion", "telefono", 60, 77, "EDIT", [{ telefono: "aaaaaaaaa" }], "telefono_format_KO"),
  Array("alumnograduacion", "telefono", 61, 78, "EDIT", [{ telefono: "000000000" }], true),

  Array("alumnograduacion", "telefono", 62, 79, "SEARCH", [{ telefono: "a" }], "telefono_format_KO"),
  Array("alumnograduacion", "telefono", 63, 80, "SEARCH", [{ telefono: "7" }], true),

  Array("alumnograduacion", "direccion", 64, 81, "ADD", [{ direccion: "" }], "direccion_min_size_KO"),
  Array("alumnograduacion", "direccion", 64, 82, "ADD", [{ direccion: "a".repeat(24) }], "direccion_min_size_KO"),
  Array("alumnograduacion", "direccion", 65, 83, "ADD", [{ direccion: "a".repeat(101) }], "direccion_max_size_KO"),
  Array("alumnograduacion", "direccion", 66, 84, "ADD", [{ direccion: "#".repeat(25) }], "direccion_format_KO"),
  Array("alumnograduacion", "direccion", 67, 85, "ADD", [{ direccion: "a".repeat(25) }], true),

  Array("alumnograduacion", "direccion", 68, 86, "EDIT", [{ direccion: "" }], "direccion_min_size_KO"),
  Array("alumnograduacion", "direccion", 68, 87, "EDIT", [{ direccion: "a".repeat(24) }], "direccion_min_size_KO"),
  Array("alumnograduacion", "direccion", 69, 88, "EDIT", [{ direccion: "a".repeat(101) }], "direccion_max_size_KO"),
  Array("alumnograduacion", "direccion", 70, 89, "EDIT", [{ direccion: "#".repeat(25) }], "direccion_format_KO"),
  Array("alumnograduacion", "direccion", 71, 90, "EDIT", [{ direccion: "a".repeat(25) }], true),

  Array("alumnograduacion", "direccion", 72, 91, "SEARCH", [{ direccion: "#" }], "direccion_format_KO"),
  Array("alumnograduacion", "direccion", 73, 92, "SEARCH", [{ direccion: "" }], true),

  Array("alumnograduacion", "email", 74, 93, "ADD", [{ email: "" }], "email_min_size_KO"),
  Array("alumnograduacion", "email", 74, 94, "ADD", [{ email: "aaaaa" }], "email_min_size_KO"),
  Array("alumnograduacion", "email", 75, 95, "ADD", [{ email: "a".repeat(41) }], "email_max_size_KO"),
  Array("alumnograduacion", "email", 76, 96, "ADD", [{ email: "######" }], "email_format_KO"),
  Array("alumnograduacion", "email", 76, 97, "ADD", [{ email: "@b.com" }], "email_format_KO"),
  Array("alumnograduacion", "email", 76, 98, "ADD", [{ email: "abbbb.com" }], "email_format_KO"),
  Array("alumnograduacion", "email", 76, 99, "ADD", [{ email: "a@.com" }], "email_format_KO"),
  Array("alumnograduacion", "email", 76, 100, "ADD", [{ email: "a@bbbb" }], "email_format_KO"),
  Array("alumnograduacion", "email", 77, 101, "ADD", [{ email: "a@b.com" }], true),

  Array("alumnograduacion", "email", 78, 102, "EDIT", [{ email: "" }], "email_min_size_KO"),
  Array("alumnograduacion", "email", 78, 103, "EDIT", [{ email: "aaaaa" }], "email_min_size_KO"),
  Array("alumnograduacion", "email", 79, 104, "EDIT", [{ email: "a".repeat(41) }], "email_max_size_KO"),
  Array("alumnograduacion", "email", 80, 105, "EDIT", [{ email: "######" }], "email_format_KO"),
  Array("alumnograduacion", "email", 80, 106, "EDIT", [{ email: "@b.com" }], "email_format_KO"),
  Array("alumnograduacion", "email", 80, 107, "EDIT", [{ email: "abbbb.com" }], "email_format_KO"),
  Array("alumnograduacion", "email", 80, 108, "EDIT", [{ email: "a@.com" }], "email_format_KO"),
  Array("alumnograduacion", "email", 80, 109, "EDIT", [{ email: "a@bbbb" }], "email_format_KO"),
  Array("alumnograduacion", "email", 81, 110, "EDIT", [{ email: "a@b.com" }], true),

  Array("alumnograduacion", "email", 82, 111, "SEARCH", [{ email: "a".repeat(41) }], "email_max_size_KO"),
  Array("alumnograduacion", "email", 83, 112, "SEARCH", [{ email: "######" }], "email_format_KO"),
  Array("alumnograduacion", "email", 83, 113, "SEARCH", [{ email: "abbbb.com" }], "email_format_KO"),
  Array("alumnograduacion", "email", 83, 114, "SEARCH", [{ email: "a@.com" }], "email_format_KO"),
  Array("alumnograduacion", "email", 84, 115, "SEARCH", [{ email: "a@bbb" }], true),
  
  Array("alumnograduacion", "password", 99, 130, "SEARCH", [{ password: "a".repeat(65) }], "password_max_size_KO"),
  Array("alumnograduacion", "password", 100, 131, "SEARCH", [{ password: "ñ" }], "password_format_KO"),
  Array("alumnograduacion", "password", 101, 132, "SEARCH", [{ password: "" }], true),
  Array("alumnograduacion", "titulacion", 102, 133, "SEARCH", [{ titulacion: "GREEE" }], "titulacion_max_size_KO"),
  Array("alumnograduacion", "dni", 103, 134, "SEARCH", [{ dni: "00000000T0" }], "dni_size_KO"),
  Array("alumnograduacion", "telefono", 104, 135, "SEARCH", [{ telefono: "0".repeat(10) }], "telefono_max_size_KO"),
  Array("alumnograduacion", "direccion", 105, 136, "SEARCH", [{ direccion: "a".repeat(101) }], "direccion_max_size_KO"),
);

let alumnograduacion_tests_files = Array(

  Array("alumnograduacion", "nueva_fotoacto", 85, 116, "ADD", "existe", [], "nueva_fotoacto_not_exist_file_KO"),
  Array("alumnograduacion", "nueva_fotoacto", 86, 117, "ADD", "format_name_file", [{ format_name_file: '1111111' }], "nueva_fotoacto_format_name_file_KO"),
  Array("alumnograduacion", "nueva_fotoacto", 87, 118, "ADD", "type_file", [{ type_file: 'img/pdf' }], "nueva_fotoacto_type_file_KO"),
  Array("alumnograduacion", "nueva_fotoacto", 88, 119, "ADD", "max_size_file", [{ max_size_file: 2000000 }], "nueva_fotoacto_max_size_file_KO"),
  Array("alumnograduacion", "nueva_fotoacto", 89, 120, "ADD", "min_size_name", [{ format_name_file: 'n.jpg' }], "nueva_fotoacto_min_size_name_KO"),
  Array("alumnograduacion", "nueva_fotoacto", 90, 121, "ADD", "max_size_name", [{ format_name_file: 'n'.repeat(41) }], "nueva_fotoacto_max_size_file_KO"),
  Array("alumnograduacion", "nueva_fotoacto", 91, 122, "ADD", "comprobar valores", [{ format_name_file: 'nombreDeArchivo.jpg' }, { type_file: 'imagen/jpeg' }, { max_size_file: 20000 }], true),

  Array("alumnograduacion", "nueva_fotoacto", 92, 123, "EDIT", "noexiste", [], "nueva_fotoacto_not_exist_file_KO"),
  Array("alumnograduacion", "nueva_fotoacto", 93, 124, "EDIT", "format_name_file", [{ format_name_file: '1111111' }], "nueva_fotoacto_format_name_file_KO"),
  Array("alumnograduacion", "nueva_fotoacto", 94, 125, "EDIT", "type_file", [{ type_file: 'img/pdf' }], "nueva_fotoacto_type_file_KO"),
  Array("alumnograduacion", "nueva_fotoacto", 95, 126, "EDIT", "max_size_file", [{ max_size_file: 2000000 }], "nueva_fotoacto_max_size_file_KO"),
  Array("alumnograduacion", "nueva_fotoacto", 96, 127, "EDIT", "min_size_name", [{ format_name_file: 'n.jpg' }], "nueva_fotoacto_min_size_name_KO"),
  Array("alumnograduacion", "nueva_fotoacto", 97, 128, "EDIT", "max_size_name", [{ format_name_file: 'n'.repeat(41) }], "nueva_fotoacto_max_size_file_KO"),
  Array("alumnograduacion", "nueva_fotoacto", 98, 129, "EDIT", "comprobar valores", [{ format_name_file: 'nombreDeArchivo.jpg' }, { type_file: 'imagen/jpeg' }, { max_size_file: 20000 }], true),

  Array("alumnograduacion", "fotoacto", 106, 137, "SEARCH", "format_name_file", [{ format_name_file: '1111111' }], "fotoacto_format_name_file_KO"),
  Array("alumnograduacion", "fotoacto", 107, 138, "SEARCH", "type_file", [{ type_file: 'img/pdf' }], "fotoacto_type_file_KO"),
  Array("alumnograduacion", "fotoacto", 108, 139, "SEARCH", "max_size_name", [{ format_name_file: 'n'.repeat(41) }], "fotoacto_max_size_file_KO"),
  Array("alumnograduacion", "fotoacto", 109, 140, "SEARCH", "comprobar valores", [{ format_name_file: 'nombreDeArchivo.jpg' }, { type_file: 'imagen/jpeg' }, { max_size_file: 20000 }], true),
);
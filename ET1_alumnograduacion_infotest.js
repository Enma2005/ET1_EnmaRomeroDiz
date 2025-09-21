
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
nombreentidad_def_tests = [
    ['alumnograduacion', 'idtipodocumento', 1, 'Validar que el campo no puede estar vacío', 'set', false, 'Rellene este campo.'],
    ['alumnograduacion', 'idtipodocumento', 2, 'Validar que el campo solo acepte números', 'set', false, 'El valor no es numérico.'],
    ['alumnograduacion', 'idtipodocumento', 3, 'Validar que el campo solo acepte números enteros', 'set', false, 'El valor no es numérico.'],
    ['alumnograduacion', 'idtipodocumento', 4, 'Validar que el campo solo acepte valores positivos', 'set', false, 'El valor debe ser positivo.'],
    ['alumnograduacion', 'idtipodocumento', 5, 'Validar que el campo solo acepte valores del 1 al 5', 'set', false, 'El valor no está dentro del rango permitido.'],
    ['alumnograduacion', 'idtipodocumento', 6, 'Validar que el campo acepte valores del 1 al 5', 'set', true, true]
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

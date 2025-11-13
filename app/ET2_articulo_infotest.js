
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
    //CodigoA

    ['articulo', 'FechaPublicacionR', 'input', 201, 'Validar que el campo esté vacío.', 'ADD', 'FechaPublicacionR_vacio_KO', 'La fecha de publicación no puede estar vacía.'],
    ['articulo', 'FechaPublicacionR', 'input', 202, 'Validar que el formato de la fecha sea incorrecto (no cumple YYYY-MM-DD).', 'ADD', 'FechaPublicacionR_formato_KO', 'El formato de la fecha debe ser YYYY-MM-DD.'],
    ['articulo', 'FechaPublicacionR', 'input', 203, 'Validar que la fecha sea posterior a la actual.', 'ADD', 'FechaPublicacionR_superiorActual_KO', 'La fecha de publicación no puede ser posterior a la fecha actual.'],
    ['articulo', 'FechaPublicacionR', 'input', 204, 'Validar que la fecha sea correcta.', 'ADD', 'FechaPublicacionR_correcto_OK', 'Fecha de publicación válida.'],

    // ---------- EDIT ----------
    ['articulo', 'FechaPublicacionR', 'input', 205, 'Validar que el campo esté vacío.', 'EDIT', 'FechaPublicacionR_vacio_KO', 'La fecha de publicación no puede estar vacía.'],
    ['articulo', 'FechaPublicacionR', 'input', 206, 'Validar que el formato de la fecha sea incorrecto (no cumple YYYY-MM-DD).', 'EDIT', 'FechaPublicacionR_formato_KO', 'El formato de la fecha debe ser YYYY-MM-DD.'],
    ['articulo', 'FechaPublicacionR', 'input', 207, 'Validar que la fecha sea posterior a la actual.', 'EDIT', 'FechaPublicacionR_superiorActual_KO', 'La fecha de publicación no puede ser posterior a la fecha actual.'],
    ['articulo', 'FechaPublicacionR', 'input', 208, 'Validar que la fecha sea correcta.', 'EDIT', 'FechaPublicacionR_correcto_OK', 'Fecha de publicación válida.'],

    // ---------- SEARCH ----------
    ['articulo', 'FechaPublicacionR', 'input', 209, 'Validar que el campo esté vacío (permitido en búsqueda).', 'SEARCH', 'FechaPublicacionR_vacio_OK', 'Campo vacío permitido en búsqueda.'],
    ['articulo', 'FechaPublicacionR', 'input', 210, 'Validar que el formato de la fecha sea incorrecto (no cumple YYYY-MM-DD).', 'SEARCH', 'FechaPublicacionR_formato_KO', 'El formato de la fecha debe ser YYYY-MM-DD.'],
    ['articulo', 'FechaPublicacionR', 'input', 211, 'Validar que la fecha sea correcta.', 'SEARCH', 'FechaPublicacionR_correcto_OK', 'Fecha de publicación válida.']


    //BUSQUEDA CodigoA
    ['articulo', 'CodigoA','input', 11, 'Validar que el campo este vacio o compuesto por números ', 'SEARCH', 'CodigoA_format_KO', 'Solo se admiten números.'],
    ['articulo', 'CodigoA','input', 12, 'Validar que el campo tenga un maximo de 11 caracteres', 'SEARCH', 'CodigoA_max_size_KO', 'Maximo 11 caracteres.'],
    ['articulo', 'CodigoA','input', 13, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],
  
    //AutoresA
  
    //ADD AutoresA
    ['articulo', 'AutoresA','input', 14, 'Validar que el campo no este vacio', 'ADD', 'AutoresA_vacio_KO', 'Complete el campo'],
    ['articulo', 'AutoresA','input', 15, 'Validar que el campo tenga un minimo de 4 caracteres', 'ADD', 'AutoresA_min_size_KO', 'Mínimo 4 caracteres.'],
    ['articulo', 'AutoresA','input', 16, 'Validar que el campo tenga un maximo de 200 caracteres', 'ADD', 'AutoresA_max_size_KO', 'Máximo 200 caracteres.'],
    ['articulo', 'AutoresA','input', 17, 'Validar que el campo no tenga numeros', 'ADD', 'AutoresA_format_KO', 'No debe contener números.'],
    ['articulo', 'AutoresA','input', 18, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],
    
    //EDITAR AutoresA
    ['articulo', 'AutoresA','input', 19, 'Validar que el campo no este vacio', 'EDIT', 'AutoresA_vacio_KO', 'Complete el campo'],
    ['articulo', 'AutoresA','input', 20, 'Validar que el campo tenga un minimo de 4 caracteres', 'EDIT', 'AutoresA_min_size_KO', 'Mínimo 4 caracteres.'],
    ['articulo', 'AutoresA','input', 21, 'Validar que el campo tenga un maximo de 200 caracteres', 'EDIT', 'AutoresA_max_size_KO', 'Máximo 200 caracteres.'],
    ['articulo', 'AutoresA','input', 22, 'Validar que el campo no tenga numeros', 'EDIT', 'AutoresA_format_KO', 'No debe contener números.'],
    ['articulo', 'AutoresA','input', 23, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],
  
    //BUSQUEDA AutoresA
    ['articulo', 'AutoresA','input', 24, 'Validar que el campo este vacio o compuesto por alfabeticos sin ñ ni espacios ni acentos ', 'SEARCH', 'AutoresA_format_KO', 'No se admiten ni ñ, ni espacios, ni acentos.'],
    ['articulo', 'AutoresA','input', 25, 'Validar que el campo tenga un maximo de 200 caracteres', 'SEARCH', 'AutoresA_max_size_KO', 'Maximo 200 caracteres.'],
    ['articulo', 'AutoresA','input', 26, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],
  
    
    //ADD TituloA
    ['articulo', 'TituloA', 'input',  27, 'Validar que el campo no este vacio', 'ADD', 'TituloA_vacio_KO', 'Complete el campo'],
    ['articulo', 'TituloA', 'input',  28, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'ADD', 'TituloA_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
    ['articulo', 'TituloA', 'input',  29, 'Validar que el campo tenga un minimo de 2 caracteres', 'ADD', 'TituloA_min_size_KO', 'Mínimo 2 caracteres.'],
    ['articulo', 'TituloA', 'input',  30, 'Validar que el campo tenga un maximo de 100 caracteres', 'ADD', 'TituloA_max_size_KO', 'Máximo 100 caracteres.'],   
    ['articulo', 'TituloA', 'input',  31, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'], 
  
    //EDITAR TituloA
    ['articulo', 'TituloA', 'input',  32, 'Validar que el campo no este vacio', 'EDIT', 'TituloA_vacio_KO', 'Complete el campo'],  
    ['articulo', 'TituloA', 'input',  33, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'EDIT', 'TituloA_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
    ['articulo', 'TituloA', 'input',  34, 'Validar que el campo tenga un minimo de 2 caracteres', 'EDIT', 'TituloA_min_size_KO', 'Mínimo 2 caracteres.'],
    ['articulo', 'TituloA', 'input',  35, 'Validar que el campo tenga un maximo de 100 caracteres', 'EDIT', 'TituloA_max_size_KO', 'Máximo 100 caracteres.'],   
    ['articulo', 'TituloA', 'input',  36, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],
    
    //BUSQUEDA TituloA
    ['articulo', 'TituloA', 'input',  37, 'Validar que el campo este vacio o compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'SEARCH', 'TituloA_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
    ['articulo', 'TituloA', 'input',  38, 'Validar que el campo tenga un maximo de 100 caracteres', 'SEARCH', 'TituloA_max_size_KO', 'Maximo 100 caracteres.'],
    ['articulo', 'TituloA', 'input',  39, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],
  
    //ADD TitoloR
    ['articulo', 'TitoloR', 'input', 40, 'Validar que el campo no este vacio', 'ADD', 'TitoloR_vacio_KO', 'Complete el campo'],
    ['articulo', 'TitoloR', 'input', 41, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'ADD', 'TitoloR_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
    ['articulo', 'TitoloR', 'input', 42, 'Validar que el campo tenga un minimo de 2 caracteres', 'ADD', 'TitoloR_min_size_KO', 'Mínimo 2 caracteres.'],
    ['articulo', 'TitoloR', 'input', 43, 'Validar que el campo tenga un maximo de 100 caracteres', 'ADD', 'TitoloR_max_size_KO', 'Máximo 100 caracteres.'],   
    ['articulo', 'TitoloR', 'input', 44, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'], 
    
    //EDITAR TitoloR
    ['articulo', 'TitoloR', 'input', 45, 'Validar que el campo no este vacio', 'EDIT', 'TitoloR_vacio_KO', 'Complete el campo'],
    ['articulo', 'TitoloR', 'input', 46, 'Validar que el campo este compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'EDIT', 'TitoloR_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],
    ['articulo', 'TitoloR', 'input', 47, 'Validar que el campo tenga un minimo de 2 caracteres', 'EDIT', 'TitoloR_min_size_KO', 'Mínimo 2 caracteres.'],
    ['articulo', 'TitoloR', 'input', 48, 'Validar que el campo tenga un maximo de 100 caracteres', 'EDIT', 'TitoloR_max_size_KO', 'Máximo 100 caracteres.'],   
    ['articulo', 'TitoloR', 'input', 49, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],
    
    //BUSQUEDA TitoloR
    ['articulo', 'TitoloR', 'input', 50, 'Validar que el campo este vacio o compuesto por alfabeticos con ñ, espacios y acentos permitidos', 'SEARCH', 'TitoloR_format_KO', 'No se admiten caracteres que no sean alfabeticos, espacios, ñ o acentos.'],            
    ['articulo', 'TitoloR', 'input', 51, 'Validar que el campo tenga un maximo de 100 caracteres', 'SEARCH', 'TitoloR_max_size_KO', 'Maximo 100 caracteres.'],
    ['articulo', 'TitoloR', 'input', 52, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],
  
    //ADD EstadoA
    ['articulo', 'EstadoA','select', 53, 'Validar que el campo no este vacio', 'ADD', 'EstadoA_vacio_KO', 'Complete el campo'],
    ['articulo', 'EstadoA','select', 54, 'Validar que el campoa sea uno de los siguientes terminos: [Enviado,Revision,Publicado]', 'ADD', 'EstadoA_format_KO', 'No se admiten otros valores que no sean [Enviado,Revision,Publicado].'],
    ['articulo', 'EstadoA','select', 55, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'], 
    
    //EDITAR EstadoA
    ['articulo', 'EstadoA','select', 56, 'Validar que el campo no este vacio', 'EDIT', 'EstadoA_vacio_KO', 'Complete el campo'],
    ['articulo', 'EstadoA','select', 57, 'Validar que el campoa sea uno de los siguientes terminos: [Enviado,Revision,Publicado]', 'EDIT', 'EstadoA_format_KO', 'No se admiten otros valores que no sean [Enviado,Revision,Publicado].'],
    ['articulo', 'EstadoA','select', 58, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],
  
    //BUSQUEDA EstadoA
    ['articulo', 'EstadoA','select', 59, 'Validar que el campo este vacio o sea uno de los siguientes terminos: [Enviado,Revision,Publicado]', 'SEARCH', 'EstadoA_format_KO', 'No se admiten otros valores que no sean [Enviado,Revision,Publicado] o subexpresiones del mismo.'],
    ['articulo', 'EstadoA','select', 60, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],  
  
  
    //ISSN
    ['articulo', 'ISSN', 'input' , 61, 'Validar que el campo no este vacio', 'ADD', 'ISSN_vacio_KO', 'Complete el campo'],
    ['articulo', 'ISSN', 'input' , 62, 'Validar que el campo tenga 8 numeros separados de 4 en 4 por un guion y cuyo ultimo digito pueda ser una letra X','ADD', 'ISSN_format_KO', 'El format debe ser 8 dígitos o 7 digitos y una letra X mayúscula que corresponda al numero anterior.'],
    ['articulo', 'ISSN', 'input' , 63, 'Validar que el campo tenga un maximo y minimo de 9 caracteres', 'ADD', 'ISSN_max_size_KO', 'Máximo y mínimo 9 caracteres.'],   
    ['articulo', 'ISSN', 'input' , 64, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],
  
    //EDITAR ISSN
    ['articulo', 'ISSN', 'input' , 65, 'Validar que el campo no este vacio', 'EDIT', 'ISSN_vacio_KO', 'Complete el campo'],
    ['articulo', 'ISSN', 'input' , 66, 'Validar que el campo tenga 8 numeros separados de 4 en 4 por un guion y cuyo ultimo digito pueda ser una letra X','EDIT', 'ISSN_format_KO', 'El format debe ser 8 dígitos o 7 digitos y una letra X mayúscula que corresponda al numero anterior.'],
    ['articulo', 'ISSN', 'input' , 67, 'Validar que el campo tenga un maximo y minimo de 9 caracteres', 'EDIT', 'ISSN_max_size_KO', 'Máximo y mínimo 9 caracteres.'],   
    ['articulo', 'ISSN', 'input' , 68, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],
  
    //BUSQUEDA ISSN
    ['articulo', 'ISSN', 'input' , 69, 'Validar que el campo este vacio o sea un ISSN completo o una subexpresion','SEARCH', 'ISSN_format_KO', 'El format debe ser 8 dígitos y una letra mayúscula que corresponda al numero, una subexpresion del mismo o vacio.'],
    ['articulo', 'ISSN', 'input' , 70, 'Validar que el campo tenga un maximo y minimo de 9 caracteres', 'SEARCH', 'ISSN_max_size_KO', 'Maximo 9 caracteres.'],
    ['articulo', 'ISSN', 'input' , 71, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],
  
    //VolumenR
    ['articulo', 'VolumenR', 'input' , 72, 'Validar que el campo no este vacio', 'ADD', 'VolumenR_vacio_KO', 'Complete el campo'],
    ['articulo', 'VolumenR', 'input' , 73, 'Validar que el campo tenga un máximo de 4 caracteres', 'ADD', 'VolumenR_max_size_KO', 'Máximo 4 caracteres.'],   
    ['articulo', 'VolumenR', 'input' , 74, 'Validar que el campo este compuesto por numeros', 'ADD', 'VolumenR_format_KO', 'Solo se admiten números.'],
    ['articulo', 'VolumenR', 'input' , 76, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],
  
    //EDITAR VolumenR
    ['articulo', 'VolumenR', 'input' , 77, 'Validar que el campo no este vacio', 'EDIT', 'VolumenR_vacio_KO', 'Complete el campo'],
    ['articulo', 'VolumenR', 'input' , 78, 'Validar que el campo tenga un máximo de 4 caracteres', 'EDIT', 'VolumenR_max_size_KO', 'Máximo 4 caracteres.'],
    ['articulo', 'VolumenR', 'input' , 79, 'Validar que el campo este compuesto por numeros', 'EDIT', 'VolumenR_format_KO', 'Solo se admiten números.'],
    ['articulo', 'VolumenR', 'input' , 81, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],
  
    //BUSQUEDA VolumenR
    ['articulo', 'VolumenR', 'input' , 82, 'Validar que el campo este vacio o compuesto por numeros', 'SEARCH', 'VolumenR_format_KO', 'Solo se admiten números.'],
    ['articulo', 'VolumenR', 'input' , 83, 'Validar que el campo tenga un máximo de 4 caracteres', 'SEARCH', 'VolumenR_max_size_KO', 'Maximo 4 caracteres.'],
    ['articulo', 'VolumenR', 'input' , 84, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],
  
    
    //PagInA
    ['articulo', 'PagInA', 'textarea',  85, 'Validar que el campo no este vacio', 'ADD', 'PagInA_vacio_KO', 'Complete el campo'],
    ['articulo', 'PagInA', 'textarea',  86, 'Validar que el campo este compuesto por numeros', 'ADD', 'PagInA_format_KO', 'No se admiten caracteres que no números.'],
    ['articulo', 'PagInA', 'textarea',  88, 'Validar que el campo tenga un maximo de 4 caracteres', 'ADD', 'PagInA_max_size_KO', 'Máximo 4 caracteres.'],   
    ['articulo', 'PagInA', 'textarea',  89, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'], 
  
    //EDITAR PagInA
    ['articulo', 'PagInA', 'textarea',  90, 'Validar que el campo no este vacio', 'EDIT', 'PagInA_vacio_KO', 'Complete el campo'],
    ['articulo', 'PagInA', 'textarea',  91, 'Validar que el campo este compuesto por numeros', 'EDIT', 'PagInA_format_KO', 'No se admiten caracteres que no números.'],
    ['articulo', 'PagInA', 'textarea',  93, 'Validar que el campo tenga un maximo de 4 caracteres', 'EDIT', 'PagInA_max_size_KO', 'Máximo 4 caracteres.'],
    ['articulo', 'PagInA', 'textarea',  94, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],
    
    //BUSQUEDA PagInA
    ['articulo', 'PagInA', 'textarea',  95, 'Validar que el campo este vacio o compuesto por numeros', 'SEARCH', 'PagInA_format_KO', 'No se admiten caracteres que no números.'],
    ['articulo', 'PagInA', 'textarea',  96, 'Validar que el campo tenga un maximo de 4 caracteres', 'SEARCH', 'PagInA_max_size_KO', 'Máximo 4 caracteres.'],
    ['articulo', 'PagInA', 'textarea',  97, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],
  
    //PagFinA
    ['articulo', 'PagFinA', 'textarea', 98, 'Validar que el campo no este vacio', 'ADD', 'PagFinA_vacio_KO', 'Complete el campo'],
    ['articulo', 'PagFinA', 'textarea', 99, 'Validar que el campo este compuesto por numeros', 'ADD', 'PagFinA_format_KO', 'No se admiten caracteres que no números.'],
    ['articulo', 'PagFinA', 'textarea', 101, 'Validar que el campo tenga un maximo de 4 caracteres', 'ADD', 'PagFinA_max_size_KO', 'Máximo 4 caracteres.'],
    ['articulo', 'PagFinA', 'textarea', 102 , 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],

    //EDITAR PagFinA
    ['articulo', 'PagFinA', 'textarea', 103, 'Validar que el campo no este vacio', 'EDIT', 'PagFinA_vacio_KO', 'Complete el campo'],
    ['articulo', 'PagFinA', 'textarea', 104, 'Validar que el campo este compuesto por numeros', 'EDIT', 'PagFinA_format_KO', 'No se admiten caracteres que no números.'],
    ['articulo', 'PagFinA', 'textarea', 106, 'Validar que el campo tenga un maximo de 4 caracteres', 'EDIT', 'PagFinA_max_size_KO', 'Máximo 4 caracteres.'],
    ['articulo', 'PagFinA', 'textarea', 107, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

    //BUSQUEDA PagFinA
    ['articulo', 'PagFinA', 'textarea', 108, 'Validar que el campo este vacio o compuesto por numeros', 'SEARCH', 'PagFinA_format_KO', 'No se admiten caracteres que no números.'],
    ['articulo', 'PagFinA', 'textarea', 109, 'Validar que el campo tenga un maximo de 4 caracteres', 'SEARCH', 'PagFinA_max_size_KO', 'Máximo 4 caracteres.'],
    ['articulo', 'PagFinA', 'textarea', 110, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],

    //ADD FicheropdfA
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,111, 'Validar que el campo no este vacio', 'ADD', 'nuevo_FicheropdfA_vacio_KO', 'Complete el campo'],
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,112, 'Validar que el campo tenga un nombre con solo alfabeticos sin espacios ni puntos antes de la extension', 'ADD', 'nuevo_FicheropdfA_nombrepdf_format_KO', 'El format deben ser alfabeticos sin espacios ni puntos antes de la extension (arc.hivo.pdf estaria mal).'],
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,113, 'Validar que el campo tenga un nombre con un minimo de 1 caracter mas la extension (total 5)', 'ADD', 'nuevo_FicheropdfA_nombrepdf_min_size_KO', 'El nombre debe contener minimo de 1 caracter mas la extension (total 4).'],
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,114, 'Validar que el campo tenga un nombre con un maximo de 20 caracteres', 'ADD', 'nuevo_FicheropdfA_nombrepdf_max_size_KO', 'El nombre debe contener maximo de 20 caracteres.'],
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,115, 'Validar que el campo sea un pdf', 'ADD', 'nuevo_FicheropdfA_format_KO', 'El format debe ser pdf.'],
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,116, 'Validar que el campo no supere el tamaño maximo de 2MB', 'ADD', 'nuevo_FicheropdfA_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,117, 'Validar que el campo sea correcto', 'ADD', true, 'Correcto.'],   

    //EDITAR FicheropdfA
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,118, 'Validar que el campo no este vacio', 'EDIT', 'nuevo_FicheropdfA_vacio_KO', 'Complete el campo'],
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,119, 'Validar que el campo tenga un nombre con solo alfabeticos sin espacios ni puntos antes de la extension', 'EDIT', 'nuevo_FicheropdfA_nombrepdf_format_KO', 'El format deben ser alfabeticos sin espacios ni puntos antes de la extension (arc.hivo.pdf estaria mal).'],
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,120, 'Validar que el campo tenga un nombre con un minimo de 1 caracter mas la extension (total 5)', 'EDIT', 'nuevo_FicheropdfA_nombrepdf_min_size_KO', 'El nombre debe contener un minimo 1 caracter mas la extension (total 4)..'],
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,121, 'Validar que el campo tenga un nombre con un maximo de 20 caracteres', 'EDIT', 'nuevo_FicheropdfA_nombrepdf_max_size_KO', 'El nombre debe contener maximo de 20 caracteres.'],
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,122, 'Validar que el campo sea un pdf', 'EDIT', 'nuevo_FicheropdfA_format_KO', 'El format debe ser pdf.'],
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,123, 'Validar que el campo no supere el tamaño maximo de 2MB', 'EDIT', 'nuevo_FicheropdfA_max_size_KO', 'El tamaño máximo permitido es 2MB.'],
    ['articulo', 'nuevo_FicheropdfA', 'inputfile' ,124, 'Validar que el campo sea correcto', 'EDIT', true, 'Correcto.'],

    //BUSQUEDA FicheropdfA
    ['articulo', 'FicheropdfA', 'input' ,125, 'Validar que el campo este vacio o tenga un nombre con solo alfabeticos sin espacios ni puntos antes de la extension', 'SEARCH', 'FicheropdfA_nombrepdf_format_KO', 'El format deben ser alfabeticos sin espacios ni puntos antes de la extension (arc.hivo.pdf estaria mal).'],
    ['articulo', 'FicheropdfA', 'input' ,126, 'Validar que el campo tenga un nombre con un maximo de 20 caracteres', 'SEARCH', 'FicheropdfA_nombrepdf_max_size_KO', 'El nombre debe contener maximo de 20 caracteres.'],
    ['articulo', 'FicheropdfA', 'input' ,127, 'Validar que el campo sea correcto', 'SEARCH', true, 'Correcto.'],
  
  
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
  
  let articulo_tests_fields = [
  
    //fechaPublicacion
    ['articulo', 'FechaPublicacionR', 201, 1, 'ADD', 'existe', [], 'FechaPublicacionR_vacio_KO'], 
    ['articulo', 'FechaPublicacionR', 202, 2, 'ADD', 'formato', [{FechaPublicacionR: '12/11/2025'}], 'FechaPublicacionR_formato_KO'], // formato incorrecto
    ['articulo', 'FechaPublicacionR', 203, 3, 'ADD', 'superior_actual', [{FechaPublicacionR: '2099-01-01'}], 'FechaPublicacionR_superiorActual_KO'], // futura
    ['articulo', 'FechaPublicacionR', 204, 4, 'ADD', 'correcto', [{FechaPublicacionR: '2024-11-12'}], true], // correcto

    // EDIT
    ['articulo', 'FechaPublicacionR', 205, 5, 'EDIT', 'existe', [], 'FechaPublicacionR_vacio_KO'], 
    ['articulo', 'FechaPublicacionR', 206, 6, 'EDIT', 'formato', [{FechaPublicacionR: '11-12-2025'}], 'FechaPublicacionR_formato_KO'], // formato incorrecto
    ['articulo', 'FechaPublicacionR', 207, 7, 'EDIT', 'superior_actual', [{FechaPublicacionR: '2099-12-31'}], 'FechaPublicacionR_superiorActual_KO'], // futura
    ['articulo', 'FechaPublicacionR', 208, 8, 'EDIT', 'correcto', [{FechaPublicacionR: '2023-05-15'}], true], // correcto

    ['articulo', 'FechaPublicacionR', 209, 9, 'SEARCH', 'vacio', [{FechaPublicacionR: ''}], true], // permitido vacío
    ['articulo', 'FechaPublicacionR', 210, 10, 'SEARCH', 'formato', [{FechaPublicacionR: '15-05-2024'}], 'FechaPublicacionR_formato_KO'], 
    ['articulo', 'FechaPublicacionR', 211, 11, 'SEARCH', 'correcto', [{FechaPublicacionR: '2023-04-01'}], true] 


     //SEARCH CodigoA
     ['articulo', 'CodigoA', 11, 39, 'SEARCH', [{CodigoA:'abcñ'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 40, 'EDIT', [{CodigoA:'12 344'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 41, 'EDIT', [{CodigoA:'12.343'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 42, 'EDIT', [{CodigoA:'12_343'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 43, 'EDIT', [{CodigoA:'1+123'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 44, 'EDIT', [{CodigoA:'AS123'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 45, 'EDIT', [{CodigoA:'123A13'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 46, 'EDIT', [{CodigoA:'123A'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 47, 'EDIT', [{CodigoA:'12435a.'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 48, 'EDIT', [{CodigoA:'acxìr2dg'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 49, 'EDIT', [{CodigoA:'àc3xddg'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 50, 'EDIT', [{CodigoA:'aù5xddg'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 51, 'EDIT', [{CodigoA:'ac6Üxddg'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 52, 'EDIT', [{CodigoA:'acï6ddg'}], 'CodigoA_format_KO'],
     ['articulo', 'CodigoA', 11, 53, 'EDIT', [{CodigoA:'acôd6dg'}], 'CodigoA_format_KO'],
    ['articulo', 'CodigoA', 12, 54, 'SEARCH', [{CodigoA:'12232435454646'}], 'CodigoA_max_size_KO'],
    ['articulo', 'CodigoA', 13, 55, 'SEARCH', [{CodigoA:'12345678901'}], true],
   
  
    
    //ADD AutoresA
    ['articulo', 'AutoresA', 14, 56, 'ADD', [{AutoresA:''}], 'AutoresA_vacio_KO'],
    ['articulo', 'AutoresA', 15, 57, 'ADD', [{AutoresA:'abc'}], 'AutoresA_min_size_KO'],
    ['articulo', 'AutoresA', 16, 58, 'ADD', [{AutoresA: 'n'.repeat(201)}], 'AutoresA_max_size_KO'],
    ['articulo', 'AutoresA', 17, 59, 'ADD', [{AutoresA:'12343535'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 17, 60, 'ADD', [{AutoresA:'ab1códefgh'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 17, 61, 'ADD', [{AutoresA:'ábcñdefgh33'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 17, 62, 'ADD', [{AutoresA:'11abcñdéfgh'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 17, 63, 'ADD', [{AutoresA:'.abcñdefghí'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 17, 64, 'ADD', [{AutoresA:'abcñ.defgú'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 17, 65, 'ADD', [{AutoresA:'àbcñdefgh.'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 17, 66, 'ADD', [{AutoresA:'ab@cñdèfgh'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 17, 67, 'ADD', [{AutoresA:'@abcñdefghì'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 17, 68, 'ADD', [{AutoresA:'aòcñdefgh@'}], 'AutoresA_format_KO'],              
    ['articulo', 'AutoresA', 17, 69, 'ADD', [{AutoresA:'abcÙ_defgh'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 17, 70, 'ADD', [{AutoresA:'_abôcdefgh'}], 'AutoresA_format_KO'],
    ['articulo', 'AutoresA', 17, 71, 'ADD', [{AutoresA:'abcüdefgh_'}], 'AutoresA_format_KO'],  
    ['articulo', 'AutoresA', 18, 72, 'ADD', [{AutoresA:'AutóoresA'}], true],
  
    //EDIT AutoresA
    ['articulo', 'AutoresA', 19, 73, 'EDIT', [{AutoresA:''}], 'AutoresA_vacio_KO'],   
    ['articulo', 'AutoresA', 20, 74, 'EDIT', [{AutoresA:'abc'}], 'AutoresA_min_size_KO'],
    ['articulo', 'AutoresA', 21, 75, 'EDIT', [{AutoresA:'n'.repeat(201)}], 'AutoresA_max_size_KO'],
    ['articulo', 'AutoresA', 22, 76, 'EDIT', [{AutoresA:'12343535'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 22, 77, 'EDIT', [{AutoresA:'ab1códefgh'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 22, 78, 'EDIT', [{AutoresA:'ábcñdefgh33'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 22, 79, 'EDIT', [{AutoresA:'11abcñdéfgh'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 22, 80, 'EDIT', [{AutoresA:'.abcñdefghí'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 22, 81, 'EDIT', [{AutoresA:'abcñ.defgú'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 22, 82, 'EDIT', [{AutoresA:'àbcñdefgh.'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 22, 83, 'EDIT', [{AutoresA:'ab@cñdèfgh'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 22, 84, 'EDIT', [{AutoresA:'@abcñdefghì'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 22, 85, 'EDIT', [{AutoresA:'aòcñdefgh@'}], 'AutoresA_format_KO'],              
    ['articulo', 'AutoresA', 22, 86, 'EDIT', [{AutoresA:'abcÙ_defgh'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 22, 87, 'EDIT', [{AutoresA:'_abôcdefgh'}], 'AutoresA_format_KO'],
    ['articulo', 'AutoresA', 22, 88, 'EDIT', [{AutoresA:'abcüdefgh_'}], 'AutoresA_format_KO'],  
    ['articulo', 'AutoresA', 23, 89, 'EDIT', [{AutoresA:'AutoresA'}], true],
  
    //SEARCH AutoresA
    ['articulo', 'AutoresA', 24, 90, 'SEARCH', [{AutoresA:'12343535'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 24, 91, 'SEARCH', [{AutoresA:'ab1códefgh'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 24, 92, 'SEARCH', [{AutoresA:'ábcñdefgh33'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 24, 93, 'SEARCH', [{AutoresA:'11abcñdéfgh'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 24, 94, 'SEARCH', [{AutoresA:'.abcñdefghí'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 24, 95, 'SEARCH', [{AutoresA:'abcñ.defgú'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 24, 96, 'SEARCH', [{AutoresA:'àbcñdefgh.'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 24, 97, 'SEARCH', [{AutoresA:'ab@cñdèfgh'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 24, 98, 'SEARCH', [{AutoresA:'@abcñdefghì'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 24, 99, 'SEARCH', [{AutoresA:'aòcñdefgh@'}], 'AutoresA_format_KO'],              
    ['articulo', 'AutoresA', 24, 100, 'SEARCH', [{AutoresA:'abc_Ùdefgh'}], 'AutoresA_format_KO'], 
    ['articulo', 'AutoresA', 24, 101, 'SEARCH', [{AutoresA:'_abôcdefgh'}], 'AutoresA_format_KO'],
    ['articulo', 'AutoresA', 24, 102, 'SEARCH', [{AutoresA:'abcüdefgh_'}], 'AutoresA_format_KO'],
    ['articulo', 'AutoresA', 25, 103, 'SEARCH', [{AutoresA:'n'.repeat(201)}], 'AutoresA_max_size_KO'],  
    ['articulo', 'AutoresA', 26, 104, 'SEARCH', [{AutoresA:'AutoresA'}], true],
  
  
  
    //ADD TituloA                                
    ['articulo', 'TituloA', 27, 105, 'ADD', [{TituloA:''}], 'TituloA_vacio_KO'],      
    ['articulo', 'TituloA', 28, 106, 'ADD', [{TituloA:'abc123'}], 'TituloA_format_KO'],
    ['articulo', 'TituloA', 28, 107, 'ADD', [{TituloA:'ab.sdff'}], 'TituloA_format_KO'],
    ['articulo', 'TituloA', 28, 108, 'ADD', [{TituloA:'abcsds.'}], 'TituloA_format_KO'],
    ['articulo', 'TituloA', 28, 109, 'ADD', [{TituloA:'(abcsadasf'}], 'TituloA_format_KO'],
    ['articulo', 'TituloA', 29, 110, 'ADD', [{TituloA:'a'}], 'TituloA_min_size_KO'],
    ['articulo', 'TituloA', 30, 111, 'ADD', [{TituloA:'n'.repeat(101)}], 'TituloA_max_size_KO'],           
    ['articulo', 'TituloA', 31, 112, 'ADD', [{TituloA:'Nombre'}], true],  
    
    //EDIT TituloA                                
    ['articulo', 'TituloA', 32, 113, 'EDIT', [{TituloA:''}], 'TituloA_vacio_KO'],      
    ['articulo', 'TituloA', 33, 114, 'EDIT', [{TituloA:'abc123'}], 'TituloA_format_KO'],
    ['articulo', 'TituloA', 33, 115, 'EDIT', [{TituloA:'ab.sdff'}], 'TituloA_format_KO'],
    ['articulo', 'TituloA', 33, 116, 'EDIT', [{TituloA:'abcsds.'}], 'TituloA_format_KO'],
    ['articulo', 'TituloA', 33, 117, 'EDIT', [{TituloA:'(abcsadasf'}], 'TituloA_format_KO'],
    ['articulo', 'TituloA', 34, 118, 'EDIT', [{TituloA:'a'}], 'TituloA_min_size_KO'],
    ['articulo', 'TituloA', 35, 119, 'EDIT', [{TituloA:'n'.repeat(101)}], 'TituloA_max_size_KO'],           
    ['articulo', 'TituloA', 36, 120, 'EDIT', [{TituloA:'Nombre'}], true],  
    
    //SEARCH TituloA
    ['articulo', 'TituloA', 37, 121, 'SEARCH', [{TituloA:'abc123'}], 'TituloA_format_KO'],
    ['articulo', 'TituloA', 37, 122, 'SEARCH', [{TituloA:'ab.sdff'}], 'TituloA_format_KO'],
    ['articulo', 'TituloA', 37, 123, 'SEARCH', [{TituloA:'abcsds.'}], 'TituloA_format_KO'],
    ['articulo', 'TituloA', 37, 124, 'SEARCH', [{TituloA:'(abcsadasf'}], 'TituloA_format_KO'],
    ['articulo', 'TituloA', 38, 125, 'SEARCH', [{TituloA:'n'.repeat(101)}], 'TituloA_max_size_KO'],
    ['articulo', 'TituloA', 39 , 126, 'SEARCH', [{TituloA:'Nombre'}], true],
   
  
  
    //ADD TitoloR 
    ['articulo', 'TitoloR', 40, 127, 'ADD', [{TitoloR:''}], 'TitoloR_vacio_KO'],     
    ['articulo', 'TitoloR', 41, 128, 'ADD', [{TitoloR:'abc123'}], 'TitoloR_format_KO'], 
    ['articulo', 'TitoloR', 41, 129, 'ADD', [{TitoloR:'abcsad.'}], 'TitoloR_format_KO'],
    ['articulo', 'TitoloR', 41, 130, 'ADD', [{TitoloR:'abc.zsad'}], 'TitoloR_format_KO'],
    ['articulo', 'TitoloR', 41, 131, 'ADD', [{TitoloR:'(abcsfa'}], 'TitoloR_format_KO'],
    ['articulo', 'TitoloR', 42, 132, 'ADD', [{TitoloR:'a'}], 'TitoloR_min_size_KO'], 
    ['articulo', 'TitoloR', 43, 133, 'ADD', [{TitoloR:'n'.repeat(101)}], 'TitoloR_max_size_KO'],  
    ['articulo', 'TitoloR', 44, 134, 'ADD', [{TitoloR:'TitoloR'}], true],
    
    //EDIT TitoloR
    ['articulo', 'TitoloR', 45, 135, 'EDIT', [{TitoloR:''}], 'TitoloR_vacio_KO'],     
    ['articulo', 'TitoloR', 46, 136, 'EDIT', [{TitoloR:'abc123'}], 'TitoloR_format_KO'], 
    ['articulo', 'TitoloR', 46, 137, 'EDIT', [{TitoloR:'abcsad.'}], 'TitoloR_format_KO'],
    ['articulo', 'TitoloR', 46, 138, 'EDIT', [{TitoloR:'abc.zsad'}], 'TitoloR_format_KO'],
    ['articulo', 'TitoloR', 46, 139, 'EDIT', [{TitoloR:'(abcsfa'}], 'TitoloR_format_KO'],
    ['articulo', 'TitoloR', 47, 140, 'EDIT', [{TitoloR:'a'}], 'TitoloR_min_size_KO'], 
    ['articulo', 'TitoloR', 48, 141, 'EDIT', [{TitoloR:'n'.repeat(101)}], 'TitoloR_max_size_KO'],  
    ['articulo', 'TitoloR', 49, 142, 'EDIT', [{TitoloR:'TitoloR'}], true],
    
    //SEARCH TitoloR
    ['articulo', 'TitoloR', 50, 143, 'SEARCH', [{TitoloR:'abc123'}], 'TitoloR_format_KO'], 
    ['articulo', 'TitoloR', 50, 144, 'SEARCH', [{TitoloR:'abcsad.'}], 'TitoloR_format_KO'],
    ['articulo', 'TitoloR', 50, 145, 'SEARCH', [{TitoloR:'abc.zsad'}], 'TitoloR_format_KO'],
    ['articulo', 'TitoloR', 50, 146, 'SEARCH', [{TitoloR:'(abcsfa'}], 'TitoloR_format_KO'],
    ['articulo', 'TitoloR', 51, 147, 'SEARCH', [{TitoloR:'n'.repeat(101)}], 'TitoloR_max_size_KO'],  
    ['articulo', 'TitoloR', 52, 148, 'SEARCH', [{TitoloR:'TitoloR'}], true],
    
  
  
    //ADD EstadoA            
    ['articulo', 'EstadoA', 53, 149, 'ADD', [{EstadoA:''}], 'EstadoA_vacio_KO'],      
    ['articulo', 'EstadoA', 54, 150, 'ADD', [{EstadoA:'Envia'}], 'EstadoA_format_KO'], 
    ['articulo', 'EstadoA', 55, 151, 'ADD', [{EstadoA:'Enviado'}], true],        
   
    //EDIT EstadoA            
    ['articulo', 'EstadoA', 56, 152, 'EDIT', [{EstadoA:''}], 'EstadoA_vacio_KO'],      
    ['articulo', 'EstadoA', 57, 153, 'EDIT', [{EstadoA:'Envia'}], 'EstadoA_format_KO'], 
    ['articulo', 'EstadoA', 58, 154, 'EDIT', [{EstadoA:'Enviado'}], true],        
  
    //SEARCH EstadoA            
    ['articulo', 'EstadoA', 59, 155, 'SEARCH', [{EstadoA:'Envia'}], 'EstadoA_format_KO'], 
    ['articulo', 'EstadoA', 60, 156, 'SEARCH', [{EstadoA:'Enviado'}], true],        
   
  
  
    //ADD ISSN       
    ['articulo', 'ISSN', 61, 157, 'ADD', [{ISSN:''}], 'ISSN_vacio_KO'],       
    ['articulo', 'ISSN', 62, 158, 'ADD', [{ISSN:'1234-234'}], 'ISSN_format_KO'], 
    ['articulo', 'ISSN', 63, 159, 'ADD', [{ISSN:'1234-12345'}], 'ISSN_max_size_KO'],  
    ['articulo', 'ISSN', 64, 160, 'ADD', [{ISSN:'1234-5679'}], true], 
   
    //EDIT ISSN       
    ['articulo', 'ISSN', 65, 161, 'EDIT', [{ISSN:''}], 'ISSN_vacio_KO'],     
    ['articulo', 'ISSN', 66, 162, 'EDIT', [{ISSN:'1234-234'}], 'ISSN_format_KO'], 
    ['articulo', 'ISSN', 67, 163, 'EDIT', [{ISSN:'1234-12345'}], 'ISSN_max_size_KO'],  
    ['articulo', 'ISSN', 68, 164, 'EDIT', [{ISSN:'1234-5679'}], true], 
  
    //SEARCH ISSN       
    ['articulo', 'ISSN', 69, 165, 'SEARCH', [{ISSN:''}], 'ISSN_format_KO'], 
    ['articulo', 'ISSN', 70, 166, 'SEARCH', [{ISSN:'1234-12345'}], 'ISSN_max_size_KO'],  
    ['articulo', 'ISSN', 71, 167, 'SEARCH', [{ISSN:'1234-5679'}], true], 
    
  
  
    //ADD VolumenR
    ['articulo', 'VolumenR', 72, 168, 'ADD', [{VolumenR:''}], 'VolumenR_vacio_KO'],       
    ['articulo', 'VolumenR', 73, 169, 'ADD', [{VolumenR:'12345'}], 'VolumenR_max_size_KO'],  
    ['articulo', 'VolumenR', 74, 170, 'ADD', [{VolumenR:'145d'}], 'VolumenR_format_KO'], 
    ['articulo', 'VolumenR', 74, 171, 'ADD', [{VolumenR:'15.8'}], 'VolumenR_format_KO'],
    ['articulo', 'VolumenR', 74, 172, 'ADD', [{VolumenR:'155.'}], 'VolumenR_format_KO'],
    ['articulo', 'VolumenR', 76, 174, 'ADD', [{VolumenR:'1234'}], true],
    
    //EDIT VolumenR
    ['articulo', 'VolumenR', 77, 175, 'EDIT', [{VolumenR:''}], 'VolumenR_vacio_KO'],       
    ['articulo', 'VolumenR', 78, 176, 'EDIT', [{VolumenR:'12345'}], 'VolumenR_max_size_KO'],  
    ['articulo', 'VolumenR', 79, 177, 'EDIT', [{VolumenR:'145d'}], 'VolumenR_format_KO'], 
    ['articulo', 'VolumenR', 79, 178, 'EDIT', [{VolumenR:'15.8'}], 'VolumenR_format_KO'],
    ['articulo', 'VolumenR', 79, 179, 'EDIT', [{VolumenR:'155.'}], 'VolumenR_format_KO'],
    ['articulo', 'VolumenR', 81, 181, 'EDIT', [{VolumenR:'1234'}], true],
  
    //SEARCH VolumenR
    ['articulo', 'VolumenR', 82, 182, 'SEARCH', [{VolumenR:'145d'}], 'VolumenR_format_KO'], 
    ['articulo', 'VolumenR', 82, 183, 'SEARCH', [{VolumenR:'15.8'}], 'VolumenR_format_KO'],
    ['articulo', 'VolumenR', 82, 184, 'SEARCH', [{VolumenR:'155.'}], 'VolumenR_format_KO'],
    ['articulo', 'VolumenR', 83, 185, 'SEARCH', [{VolumenR:'12345'}], 'VolumenR_max_size_KO'],  
    ['articulo', 'VolumenR', 84, 186, 'SEARCH', [{VolumenR:'1234'}], true],
    
  
    
    //ADD PagInA
    ['articulo', 'PagInA', 85, 187, 'ADD', [{PagInA:''}], 'PagInA_vacio_KO'],      
    ['articulo', 'PagInA', 86, 188, 'ADD', [{PagInA:'12a'}], 'PagInA_format_KO'], 
    ['articulo', 'PagInA', 88, 190, 'ADD', [{PagInA:'12345'}], 'PagInA_max_size_KO'],           
    ['articulo', 'PagInA', 89, 191, 'ADD', [{PagInA:'123'}], true],             
  
    //EDIT PagInA
    ['articulo', 'PagInA', 90, 192, 'EDIT', [{PagInA:''}], 'PagInA_vacio_KO'],      
    ['articulo', 'PagInA', 91, 193, 'EDIT', [{PagInA:'123.'}], 'PagInA_format_KO'], 
    ['articulo', 'PagInA', 93, 195, 'EDIT', [{PagInA:'12345'}], 'PagInA_max_size_KO'],           
    ['articulo', 'PagInA', 94, 196, 'EDIT', [{PagInA:'123'}], true],    
  
    //SEARCH PagInA
    ['articulo', 'PagInA', 95, 197, 'SEARCH', [{PagInA:'123.'}], 'PagInA_format_KO'], 
    ['articulo', 'PagInA', 96, 198, 'SEARCH', [{PagInA:'12345'}], 'PagInA_max_size_KO'],           
    ['articulo', 'PagInA', 97, 199, 'SEARCH', [{PagInA:'123'}], true],
    
  
  //PagFinA
    //ADD PagFinA
    ['articulo', 'PagFinA', 98, 200, 'ADD', [{PagFinA:''}], 'PagFinA_vacio_KO'],      
    ['articulo', 'PagFinA', 99, 201, 'ADD', [{PagFinA:'12a'}], 'PagFinA_format_KO'], 
    ['articulo', 'PagFinA', 101, 203, 'ADD', [{PagFinA:'12345'}], 'PagFinA_max_size_KO'],           
    ['articulo', 'PagFinA', 102, 204, 'ADD', [{PagFinA:'123'}], true],             
  
    //EDIT PagFinA
    ['articulo', 'PagFinA', 103, 205, 'EDIT', [{PagFinA:''}], 'PagFinA_vacio_KO'],      
    ['articulo', 'PagFinA', 104, 206, 'EDIT', [{PagFinA:'123.'}], 'PagFinA_format_KO'], 
    ['articulo', 'PagFinA', 106, 208, 'EDIT', [{PagFinA:'12345'}], 'PagFinA_max_size_KO'],           
    ['articulo', 'PagFinA', 107, 209, 'EDIT', [{PagFinA:'123'}], true],    
  
    //SEARCH PagFinA
    ['articulo', 'PagFinA', 108, 210, 'SEARCH', [{PagFinA:'123.'}], 'PagFinA_format_KO'], 
    ['articulo', 'PagFinA', 109, 211, 'SEARCH', [{PagFinA:'12345'}], 'PagFinA_max_size_KO'],           
    ['articulo', 'PagFinA', 110, 212, 'SEARCH', [{PagFinA:'123'}], true],
  
   //fechapublicacion

    //BUSCAR FicheropdfA
    ['articulo', 'FicheropdfA', 125, 213, 'SEARCH', [{FicheropdfA : 'nombre con espacios.jpg'}], 'FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format pdf
    ['articulo', 'FicheropdfA', 125, 214, 'SEARCH', [{FicheropdfA : 'nombr,econ.jpg'}], 'FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format pdf
    ['articulo', 'FicheropdfA', 125, 215, 'SEARCH', [{FicheropdfA : 'n.ombr.jpg'}], 'FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format jpg
    ['articulo', 'FicheropdfA', 125, 216, 'SEARCH', [{FicheropdfA : '.nombreespacios.jpg'}], 'FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format jpg
    ['articulo', 'FicheropdfA', 125, 217, 'SEARCH', [{FicheropdfA : 'mbreespacios..jpg'}], 'FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format jpg
    ['articulo', 'FicheropdfA', 126, 218, 'SEARCH', [{FicheropdfA : 'n'.repeat(21)+'.jpg'}], 'FicheropdfA_nombrepdf_max_size_KO'], //nombre con 41 caracteres y format jpg
    ['articulo', 'FicheropdfA', 127, 219, 'SEARCH', [{FicheropdfA : 'nombrecorrecto.jpg'}], true]
  
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
    
    ['articulo', 'nuevo_FicheropdfA', 111, 1, 'ADD', 'existe', [], 'nuevo_FicheropdfA_vacio_KO'], 
    ['articulo', 'nuevo_FicheropdfA', 112, 2, 'ADD', 'format_name_file', [{format_name_file : 'nombre con espacios.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format pdf
    ['articulo', 'nuevo_FicheropdfA', 112, 3, 'ADD', 'format_name_file', [{format_name_file :  'nombr,econ.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format jpg
    ['articulo', 'nuevo_FicheropdfA', 112, 4, 'ADD','format_name_file', [{format_name_file : 'n.ombr.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format jpg
    ['articulo', 'nuevo_FicheropdfA', 112, 5, 'ADD','format_name_file', [{format_name_file : '.nombreespacios.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format jpg
    ['articulo', 'nuevo_FicheropdfA', 112, 6, 'ADD','format_name_file', [{format_name_file : 'nombreespacios..pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format jpg
    ['articulo', 'nuevo_FicheropdfA', 113, 7, 'ADD','format_name_file', [{format_name_file : '.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_min_size_KO'], 
    ['articulo', 'nuevo_FicheropdfA', 114, 8, 'ADD','format_name_file', [{format_name_file : 'n'.repeat(21)+'.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_max_size_KO'], //nombre con 41 caracteres y format jpg
    ['articulo', 'nuevo_FicheropdfA', 115, 9, 'ADD', 'type_file', [{format_name_file: 'foto.pdf'},{type_file: 'image/jpg'},{max_size_file:19}], 'nuevo_FicheropdfA_format_KO'], //format jpg
    ['articulo', 'nuevo_FicheropdfA', 116, 10, 'ADD', 'max_size_file', [{format_name_file: 'fomkjskdkto.pdf'},{type_file: 'application/pdf'},{max_size_file:21000000}], 'nuevo_FicheropdfA_max_size_KO'], //20MB
    ['articulo', 'nuevo_FicheropdfA', 117, 11, 'ADD','correcto', [{format_name_file: 'nombrecorrecto.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], true], //correcto 
   
    //EDITAR FicheropdfA
    ['articulo', 'nuevo_FicheropdfA', 118, 12, 'EDIT', 'existe', [], 'nuevo_FicheropdfA_vacio_KO'], 
    ['articulo', 'nuevo_FicheropdfA', 119, 13, 'EDIT','format_name_file', [{format_name_file : 'nombre con espacios.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format pdf
    ['articulo', 'nuevo_FicheropdfA', 119, 14, 'EDIT','format_name_file', [{format_name_file : 'nombreconñ.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format pdf
    ['articulo', 'nuevo_FicheropdfA', 119, 15, 'EDIT','format_name_file', [{format_name_file : 'n.ombr.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format jpg
    ['articulo', 'nuevo_FicheropdfA', 119, 16, 'EDIT','format_name_file', [{format_name_file : '.nombreespacios.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format jpg
    ['articulo', 'nuevo_FicheropdfA', 119, 17, 'EDIT','format_name_file', [{format_name_file : 'nombreespacios..pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_format_KO'], //nombre con espacios y format jpg
    ['articulo', 'nuevo_FicheropdfA', 120, 18, 'EDIT','format_name_file', [{format_name_file : '.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_min_size_KO'], 
    ['articulo', 'nuevo_FicheropdfA', 121, 19, 'EDIT','format_name_file', [{format_name_file : 'n'.repeat(21)+'.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], 'nuevo_FicheropdfA_nombrepdf_max_size_KO'], //nombre con 41 caracteres y format jpg
    ['articulo', 'nuevo_FicheropdfA', 122, 20, 'EDIT', 'type_file', [{format_name_file: 'foto.pdf'},{type_file: 'image/jpg'},{max_size_file:19}], 'nuevo_FicheropdfA_format_KO'], //format jpg
    ['articulo', 'nuevo_FicheropdfA', 123, 21, 'EDIT', 'max_size_file', [{format_name_file: 'foto.pdf'},{type_file: 'application/pdf'},{max_size_file:21000000}], 'nuevo_FicheropdfA_max_size_KO'], //20MB
    ['articulo', 'nuevo_FicheropdfA', 124, 22, 'EDIT', 'correcto',[{format_name_file: 'nombrecorrecto.pdf'},{type_file: 'application/pdf'},{max_size_file:19}], true], //correcto 
  
    ];
  
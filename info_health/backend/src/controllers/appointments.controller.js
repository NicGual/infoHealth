const appointmentsCtrl={}

appointmentsCtrl.getAppointments = (req,res) => {
    // const appointments = [

    //     {
    //         fecha: ' 3 de agosto 2022',
    //         detalles: [
    //             {
    //                 hora: '1:00',
    //                 doctor: 'nicolas gualteros',
    //                 procedimiento: 'medicina general'
    //             },
    //             {
    //                 hora: '2:00',
    //                 doctor: 'nicolas gualteros',
    //                 procedimiento: 'medicina general'
    //             },
    //             {
    //                 hora: '3:00',
    //                 doctor: 'nicolas gualteros',
    //                 procedimiento: 'medicina general'
    //             }
    //         ]
    //     },
    //     {
    //         fecha: ' 4 de agosto 2022',
    //         detalles: [
    //             {
    //                 hora: '1:00',
    //                 doctor: 'nicolas gualteros',
    //                 procedimiento: 'medicina general'
    //             },
    //             {
    //                 hora: '2:00',
    //                 doctor: 'nicolas gualteros',
    //                 procedimiento: 'medicina general'
    //             },
    //             {
    //                 hora: '3:00',
    //                 doctor: 'nicolas gualteros',
    //                 procedimiento: 'medicina general'
    //             }
    //         ]
    //     },
    //     {
    //         fecha: ' 5 de agosto 2022',
    //         detalles: [
    //             {
    //                 hora: '1:00',
    //                 doctor: 'nicolas gualteros',
    //                 procedimiento: 'medicina general'
    //             },
    //             {
    //                 hora: '2:00',
    //                 doctor: 'nicolas gualteros',
    //                 procedimiento: 'medicina general'
    //             },
    //             {
    //                 hora: '3:00',
    //                 doctor: 'nicolas gualteros',
    //                 procedimiento: 'medicina general'
    //             }
    //         ]
    //     }


    // ]
    const appointments = []
    let queryParams ={}
    let {tipo_examen,medico_seleccionado,fecha_cita}=req.query;

    //se seleccionan los datos que van a la query
    if (!medico_seleccionado==""){       
        queryParams.medico_seleccionado = medico_seleccionado
        queryParams.fecha_cita = fecha_cita
    }
    if (!tipo_examen==""){
        queryParams.tipo_examen = tipo_examen
    }
    if (!fecha_cita==""){
        queryParams.fecha_cita = fecha_cita       
    }
    //se ejecuta la query con la base de datos
    console.log(JSON.stringify(queryParams))
    //se manda la respuesta de la query 
    res.json(appointments)
    
};
module.exports = appointmentsCtrl;
console.log('custom working')



$("#add_user").submit(function(Event){
    alert('datasubmittedsuceffully')
})

$('#update_user').submit(function(Event){
    Event.preventDefault()

    const unIndexedarr=$('#update_user').serializeArray()
    const data={}
    $.map(unIndexedarr,function(n,i){
        // console.log('this is n',n,i)
        // console.log(n['name'])
        data[n['name']]=n['value']

    })
    // console.log(unIndexedarr)
    // console.log(data.id)

    const request={
        'url':`http://localhost:${process.env.PORT}/api/users/${data.id}`,
        'method':'PUT',
        'data':data
        
    }

    $.ajax(request).done(function(ress){
        alert('Data Updated Successfully')
    })
})

if(window.location.pathname=='/'){
    $ondelete=$(".table tbody td a.delete")
    $ondelete.click(function(){
        const id=$(this).attr("data-id")

        const request={
            'url':`http://localhost:${process.env.PORT}/api/users/${id}`,
            'method':'DELETE'
        }
        if(confirm('Do You Really Want to delete The data')){
            $.ajax(request).done(function(ress){
                alert('Data Deleted Successfully')
                location.reload()
            })

        }
    })
}
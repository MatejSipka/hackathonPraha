


let mojio_client;


function init()
{
    const config = {
        application: 'e61b49e1-ddd3-4056-96a0-62189ef343e6',
        secret:'6604986c-03dc-41aa-9a9f-bab88922279b'
    };
    mojio_client =  new MojioClientLite(config);

    /* promise, but I am a gambling man */
    mojio_client.authorize('erik.chalupa@gmail.com','sexy_beast_007');
}


function getPosition()
{
    mojio_client.get().vehicles().then((res) => {
        res.Data[0].Location.Lat;
        res.Data[0].Location.Lng;   
    });
}
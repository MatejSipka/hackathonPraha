import '../vendor/MojioClientLite.js'


let mojio_client;


/* returns promise */
function init()
{
    const config = {
        application: 'e61b49e1-ddd3-4056-96a0-62189ef343e6',
        secret:'6604986c-03dc-41aa-9a9f-bab88922279b'
    };
    mojio_client =  new MojioClientLite(config);

    return mojio_client.authorize('erik.chalupa@gmail.com','sexy_beast_007');
}

/* returns object */
function getPosition()
{
    mojio_client.get().vehicles().then((res) => {
        return {
            Lat: res.Data[0].Location.Lat, 
            Lng: res.Data[0].Location.Lng
        };
    }).catch(() => {
        return {
            Lat: '-1', 
            Lng: '-1'
        };
    });
}
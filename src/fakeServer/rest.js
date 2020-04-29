import FakeRest from 'fakerest';
import fetchMock from 'fetch-mock';
import generateData from 'data-generator-retail';

export default () => {
    let gdata = generateData({
        serializeDate: true,
    });

    let data = {
        ...gdata,
        aractipleri: [
            {
                Id: 1,
                VehicleTypeName: 'Minübüs',
                InsertUserId: 1,
                InsertUser: 'Salih ŞAHİN',
                InserUserIP: '127.0.0.1',
                InsertDate: '26.04.2020 22:50',
                IsDeleted: false,
                DeletedUserId: 1,
                DeleteDate: null,
            },
            {
                Id: 2,
                VehicleTypeName: 'Midibüs',
                InsertUserId: 1,
                InsertUser: 'Salih ŞAHİN',
                InserUserIP: '127.0.0.1',
                InsertDate: '26.04.2020 22:50',
                IsDeleted: false,
                DeletedUserId: 1,
                DeleteDate: null,
            },
            {
                Id: 3,
                VehicleTypeName: 'Otobüs',
                InsertUserId: 1,
                InsertUser: 'Salih ŞAHİN',
                InserUserIP: '127.0.0.1',
                InsertDate: '26.04.2020 22:50',
                IsDeleted: false,
                DeletedUserId: 1,
                DeleteDate: null,
            },
        ],
    };

    console.log(JSON.stringify(data));

    const restServer = new FakeRest.FetchServer('http://localhost:4000');
    if (window) {
        window.restServer = restServer; // give way to update data in the console
    }
    restServer.init(data);
    restServer.toggleLogging(); // logging is off by default, enable it
    fetchMock.mock('begin:http://localhost:4000', restServer.getHandler());
    return () => fetchMock.restore();
};

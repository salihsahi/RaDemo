import { ReduxState, Record, Identifier } from 'ra-core';

export type ThemeName = 'light' | 'dark';

export interface AppState extends ReduxState {
    theme: ThemeName;
}

export interface Category extends Record {
    name: string;
}

export interface Product extends Record {
    category_id: Identifier;
    description: string;
    height: number;
    image: string;
    price: number;
    reference: string;
    stock: number;
    thumbnail: string;
    width: number;
}

export interface Customer extends Record {
    first_name: string;
    last_name: string;
    address: string;
    city: string;
    zipcode: string;
    avatar: string;
    birthday: string;
    first_seen: string;
    last_seen: string;
    has_ordered: boolean;
    latest_purchase: string;
    has_newsletter: boolean;
    groups: string[];
    nb_commands: number;
    total_spent: number;
}

export interface Order extends Record {
    basket: BasketItem[];
}

export interface BasketItem {
    product_id: string;
    quantity: number;
}

/**
 * Types to eventually add in react-admin
 */
export interface FieldProps<T extends Record = Record> {
    addLabel?: boolean;
    label?: string;
    record?: T;
    source?: string;
}

export interface Review extends Record {
    customer_id: string;
}

export interface VehicleType extends Record {
    Id: number;
    VehicleTypeName: string;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

export interface VehicleCategory extends Record {
    Id: number;
    CategoryName: string;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

export interface Campus extends Record {
    Id: number;
    CampusName: string;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

export interface WorkType extends Record {
    Id: number;
    WorkTypeName: string;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

export interface Station extends Record {
    Id: number;
    StationName: string;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

export interface WorkingGroup extends Record {
    Id: number;
    WorkingGroupName: string;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

export interface Route extends Record {
    Id: number;
    RouteName: string;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

export interface File extends Record {
    Id: number;
    TableName: string;
    RecordId: number;
    FilePath: string;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

export interface Region extends Record {
    Id: number;
    RegionName: string;
    CityId: number;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

export interface City extends Record {
    Id: number;
    CityName: string;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

export interface DeparturePoint extends Record {
    Id: number;
    PointName: string;
    Lat: string;
    Long: string;
    RegionId: number;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

export interface Vehicle extends Record {
    Id: number;
    PlateNumber: string;
    VehicleTypeId: number;
    VehicleCategoryId: number;
    SeatCapacity: number;
    Brand: string;
    ModelYear: number;
    CampusId: number;
    Status: boolean;
    SeatInsuranceExpirationDate: string;
    InspectionValidityDate: string;
    TrafficInsuranceExpirationDate: string;
    IsEssential: boolean;
    IsPassive: boolean;
    IsBlackList: boolean;
    Notes: string;
    PhysicalControlPersonnelId: number;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

export interface Driver extends Record {
    Id: number;
    TcNumber: string;
    NameSurname: string;
    BirthDate: string;
    GSMNumber: string;
    CampusId: number;
    DriverLicenceType: string;
    LicenseValidityDate: string;
    DriversLicenseDate: string;
    PsychotechnicalValidityDate: string;
    CriminalRecordValidityDate: string;
    HealthDocumentsValidityDate: string;
    SRCCertificate: string;
    IsPassive: boolean;
    IsBlackList: boolean;
    Notes: string;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

export interface Driver extends Record {
    Id: number;
    SericeName: string;
    RegionId: number;
    WorkingTypeId: number;
    ServiceCode: string;
    CoordinateURL: string;
    ServicePersoneId: number;
    MorningDepartureTime: string;
    NoonDepatureTime: string;
    NightDepartureTime: string;
    DeparturePointId: string;
    PeronNumber: string;
    Notes: string;
    AnnouncementNotes: string;
    CampusId: number;
    RouteId: number;
    Distance: number;
    VehicleId: number;
    ReplacementVehicleId: number;
    DriveId: number;
    ReplacementDriverId: number;
    InsertUserId: number;
    InserUserIP: string;
    InsertDate: string;
    IsDeleted: boolean;
    DeletedUserId: number;
    DeleteDate: string;
}

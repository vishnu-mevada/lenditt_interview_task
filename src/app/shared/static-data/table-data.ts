export interface UserTable {
    name: string;
    position: number;
    creation_date: Date;
    type: string;
}

export const SOURCE_DATA: UserTable[] = [
    { position: 1, name: 'Jason Smith', creation_date: new Date(2022, 2, 1), type: 'Admin' },
    { position: 2, name: 'Johnson English', creation_date: new Date(2022, 2, 2), type: 'User' },
    { position: 3, name: 'Williams Scottish', creation_date: new Date(2022, 2, 3), type: 'User' },
    { position: 4, name: 'Brown Irish', creation_date: new Date(2022, 2, 4), type: 'User' },
    { position: 5, name: 'Garcia Spanish', creation_date: new Date(2022, 2, 5), type: 'User' },
    { position: 6, name: 'Miller French', creation_date: new Date(2022, 2, 1), type: 'User' },
    { position: 7, name: 'Davis Welsh', creation_date: new Date(2022, 11, 10), type: 'User' },
    { position: 8, name: 'Garcia Rodriguez', creation_date: new Date(2022, 11, 24), type: 'User' },
    { position: 9, name: 'Danial Smith', creation_date: new Date(2022, 11, 15), type: 'User' },
    { position: 10, name: 'Jacob Martin', creation_date: new Date(2020, 5, 11), type: 'User' },
    { position: 11, name: 'David Miller', creation_date: new Date(2020, 6, 8), type: 'User' },
    { position: 12, name: 'Evans Moore', creation_date: new Date(2021, 5, 5), type: 'User' },
    { position: 13, name: 'Kelly Walker', creation_date: new Date(2021, 6, 4), type: 'User' },
    { position: 14, name: 'Thompson taylor', creation_date: new Date(2021, 6, 5), type: 'Admin' },
    { position: 15, name: 'Edwards Stewart', creation_date: new Date(2021, 7, 12), type: 'User' },
    { position: 16, name: 'Harris Cooper', creation_date: new Date(2022, 7, 13), type: 'User' },
    { position: 17, name: 'Lewis  Norman', creation_date: new Date(2021, 7, 14), type: 'Admin' },
    { position: 18, name: 'Jack Washington', creation_date: new Date(2020, 8, 15), type: 'User' },
    { position: 19, name: 'Adam Sanchez', creation_date: new Date(2020, 9, 18), type: 'Admin' },
    { position: 20, name: 'Alexander Greek', creation_date: new Date(2021, 10, 20), type: 'User' },
    { position: 21, name: 'Nielsen Danish', creation_date: new Date(2021, 10, 21), type: 'Admin' },
    { position: 22, name: 'Robinson Robin', creation_date: new Date(2022, 11, 22), type: 'User' },
    { position: 23, name: 'Baker Smith', creation_date: new Date(2022, 11, 26), type: 'User' },
    { position: 24, name: 'Emma Clark', creation_date: new Date(2021, 12, 29), type: 'Admin' },
    { position: 25, name: 'Jason Peterson', creation_date: new Date(2021, 9, 28), type: 'User' }
];

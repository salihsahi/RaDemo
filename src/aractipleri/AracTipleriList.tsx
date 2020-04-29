import React from 'react';
import {
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    Filter,
    List,
    NullableBooleanInput,
    NumberField,
    TextField,
    SearchInput,
    EditButton,
    DeleteButton,
    ShowButton,
    CreateButton,
    ExportButton,
    TopToolbar,
} from 'react-admin';
import { useMediaQuery, makeStyles, Theme } from '@material-ui/core';

const AracTipleriFilter = (props: any) => (
    <Filter {...props}>
        <SearchInput label="Arama.." source="q" alwaysOn />
    </Filter>
);

const useStyles = makeStyles({
    nb_commands: { color: 'purple' },
});

const ListActions = ({ ...rest }) => (
    <TopToolbar>
        <CreateButton label="Yeni Araç Tipi Ekle" />
        <ExportButton label="Excel Olarak İndir" />
    </TopToolbar>
);

const AracTipleriList = (props: any) => {
    const classes = useStyles();
    const isXsmall = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('xs')
    );
    return (
        <List
            {...props}
            filters={<AracTipleriFilter />}
            sort={{ field: 'Id', order: 'ASC' }}
            perPage={25}
            actions={<ListActions />}
        >
            {isXsmall ? null : (
                <Datagrid>
                    <NumberField
                        style={{ width: '15px' }}
                        source="Id"
                        label="resources.aractipleri.fields.Id"
                        className={classes.nb_commands}
                    />
                    <TextField
                        source="VehicleTypeName"
                        label="resources.aractipleri.fields.VehicleTypeName"
                        className={classes.nb_commands}
                    />
                    <TextField
                        source="InsertUser"
                        label="resources.aractipleri.fields.InsertUser"
                        className={classes.nb_commands}
                    />
                    <TextField
                        source="InsertDate"
                        label="resources.aractipleri.fields.InsertDate"
                        className={classes.nb_commands}
                    />
                    <ShowButton label="İncele" style={{ width: '20px' }} />
                    <EditButton label="Düzenle" style={{ width: '20px' }} />
                    <DeleteButton label="Sil" style={{ width: '20px' }} />
                </Datagrid>
            )}
        </List>
    );
};

export default AracTipleriList;

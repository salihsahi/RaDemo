import { TranslationMessages } from 'ra-core';
import englishMessages from 'ra-language-english';

const customEnglishMessages: TranslationMessages = {
    ...englishMessages,
    pos: {
        search: 'Search',
        configuration: 'Configuration',
        language: 'Language',
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        dashboard: {
            monthly_revenue: 'Monthly Revenue',
            new_orders: 'New Orders',
            pending_reviews: 'Pending Reviews',
            new_customers: 'New Customers',
            pending_orders: 'Pending Orders',
            order: {
                items:
                    'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
            welcome: {
                title: 'Welcome to react-admin demo',
                subtitle:
                    "This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
                aor_button: 'react-admin site',
                demo_button: 'Source for this demo',
            },
        },
        menu: {
            sales: 'Sales',
            catalog: 'Catalog',
            customers: 'Customers',
            aracyonetimi: 'Araç Yönetimi',
            soforyonetimi: 'Şöför Yönetimi',
            servisislemleri: 'Servis İşlemleri',
            tanimlamalar: 'Tanımlamalar',
            servisyonetimi: 'Servis Yönetimi',
            aksaklikyonetimi: 'Aksaklık Yönetimi',
            kazaislemleri: 'Kaza İşlemleri',
            cezayonetimi: 'Ceza Yönetimi',
            puantajvehakedis: 'Puantaj ve Hakediş',
            aractipleri: 'Araç Tipleri',
            arackategorileri: 'Araç Kategorileri',
            kampus: 'Kampüs',
            calismasekli: 'Çalışma Şekli',
            duraklar: 'Duraklar',
            mesaigruplari: 'Mesai Grupları',
            guzergah: 'Güzergah',
        },
    },
    resources: {
        aractipleri: {
            name: 'Araç Tipleri',
            fields: {
                Id: 'Id',
                VehicleTypeName: 'Araç Tipi Adı',
                InsertUser: 'Ekleyen',
                InsertUserIP: 'Ekleyen Ip',
                InsertDate: 'Ekleme Zamanı',
                IsDeleted: 'Is Deleted',
                DeletedUserId: 'Deleted User Id',
                DeleteDate: 'Deleted Date',
            },
            fieldGroups: {
                identity: 'Identity',
                address: 'Address',
                stats: 'Stats',
                history: 'History',
                password: 'Password',
                change_password: 'Change Password',
            },
            page: {
                delete: 'Delete Customer',
            },
            errors: {
                password_mismatch:
                    'The password confirmation is not the same as the password.',
            },
        },
        soforyonetimi: {
            name: 'Şöför Yönetimi',
        },
        servisyonetimi: {
            name: 'Servis Yönetimi',
        },
        aksaklikyonetimi: { name: 'Aksaklık Yönetimi' },
        kazaislemleri: { name: 'Kaza İşlemleri' },
        cezayonetimi: { name: 'Ceza Yönetimi' },
        puantajvehakedis: { name: 'Puantaj ve Hakediş' },
        aracyonetimi: { name: 'Araç Yönetimi' },
        arackategorileri: { name: 'Araç Kategorileri' },
        kampus: { name: 'Kampüs' },
        calismasekli: { name: 'Çalışma Şekli' },
        duraklar: { name: 'Duraklar' },
        mesaigruplari: { name: 'Mesai Grupları' },
        guzergah: { name: 'Güzergah' },

        customers: {
            name: 'Customer |||| Customers',
            fields: {
                commands: 'Orders',
                first_seen: 'First seen',
                groups: 'Segments',
                last_seen: 'Last seen',
                last_seen_gte: 'Visited Since',
                name: 'Name',
                total_spent: 'Total spent',
                password: 'Password',
                confirm_password: 'Confirm password',
            },
            fieldGroups: {
                identity: 'Identity',
                address: 'Address',
                stats: 'Stats',
                history: 'History',
                password: 'Password',
                change_password: 'Change Password',
            },
            page: {
                delete: 'Delete Customer',
            },
            errors: {
                password_mismatch:
                    'The password confirmation is not the same as the password.',
            },
        },
        commands: {
            name: 'Order |||| Orders',
            amount: '1 order |||| %{smart_count} orders',
            title: 'Order %{reference}',
            fields: {
                basket: {
                    delivery: 'Delivery',
                    reference: 'Reference',
                    quantity: 'Quantity',
                    sum: 'Sum',
                    tax_rate: 'Tax Rate',
                    total: 'Total',
                    unit_price: 'Unit Price',
                },
                customer_id: 'Customer',
                date_gte: 'Passed Since',
                date_lte: 'Passed Before',
                total_gte: 'Min amount',
                status: 'Status',
                returned: 'Returned',
            },
        },
        invoices: {
            name: 'Invoice |||| Invoices',
            fields: {
                date: 'Invoice date',
                customer_id: 'Customer',
                command_id: 'Order',
                date_gte: 'Passed Since',
                date_lte: 'Passed Before',
                total_gte: 'Min amount',
                address: 'Address',
            },
        },
        products: {
            name: 'Poster |||| Posters',
            fields: {
                category_id: 'Category',
                height_gte: 'Min height',
                height_lte: 'Max height',
                height: 'Height',
                image: 'Image',
                price: 'Price',
                reference: 'Reference',
                stock_lte: 'Low Stock',
                stock: 'Stock',
                thumbnail: 'Thumbnail',
                width_gte: 'Min width',
                width_lte: 'Max width',
                width: 'Width',
            },
            tabs: {
                image: 'Image',
                details: 'Details',
                description: 'Description',
                reviews: 'Reviews',
            },
        },
        categories: {
            name: 'Category |||| Categories',
            fields: {
                products: 'Products',
            },
        },
        reviews: {
            name: 'Review |||| Reviews',
            amount: '1 review |||| %{smart_count} reviews',
            relative_to_poster: 'Review on poster',
            detail: 'Review detail',
            fields: {
                customer_id: 'Customer',
                command_id: 'Order',
                product_id: 'Product',
                date_gte: 'Posted since',
                date_lte: 'Posted before',
                date: 'Date',
                comment: 'Comment',
                rating: 'Rating',
            },
            action: {
                accept: 'Accept',
                reject: 'Reject',
            },
            notification: {
                approved_success: 'Review approved',
                approved_error: 'Error: Review not approved',
                rejected_success: 'Review rejected',
                rejected_error: 'Error: Review not rejected',
            },
        },
        segments: {
            name: 'Segments',
            fields: {
                customers: 'Customers',
                name: 'Name',
            },
            data: {
                compulsive: 'Compulsive',
                collector: 'Collector',
                ordered_once: 'Ordered once',
                regular: 'Regular',
                returns: 'Returns',
                reviewer: 'Reviewer',
            },
        },
    },
};

export default customEnglishMessages;

import { Link } from "react-dom-dom"
export const AdminAsideData = [
    {
        key: "/admin",
        icon: Icons.Dashboard,
        label: <Link to="/admin">Dashboard</Link>,
    },
    {
        key: "doctorManagement",
        icon: Icons.DoctorUser,
        label: <Link to="/admin/doctor-management">Doctor Management</Link>,
    },
    {
        key: "patientManagement",
        icon: Icons.DoctorUser,
        label: <Link to="/admin/patient-management">Patient Management</Link>,
    },
    {
        key: "receptionManagement",
        icon: Icons.DoctorUser,
        label: <Link to="/admin/reception-management">Reception Management</Link>,
    },
    {
        key: "medicalManagement",
        icon: Icons.DoctorUser,
        label: <Link to="/admin/medical-management">Medical Management</Link>,
    },
    {
        key: "BillingPayments",
        icon: Icons.Wallet,
        label: "Billing And Payments",
        children: [
            {
                key: "monitorBilling",
                label: <Link to="/admin/monitor-billing">Monitor Billing</Link>,
            },
            {
                key: "insuranceClaims",
                label: <Link to="/admin/insurance-claims">Insurance Claims</Link>,
            },
            {
                key: "paymentProcess",
                label: <Link to="/admin/payment-process">Payment Process</Link>,
            },
        ],
    },
    {
        key: "reportingAnalytics",
        icon: Icons.Analytics,
        label: <Link to="/admin/reporting-analytics">Reporting And Analytics</Link>,
    },
    // temp all-modal
    {
        key: "all-modal",
        icon: Icons.Analytics,
        label: <Link to='/admin/all-modal'>All Modal</Link>,
    },

];
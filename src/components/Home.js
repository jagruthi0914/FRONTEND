function home1() {
    return (
        <div style={styles.container}>
            <h2 style={styles.text}>Welcome to the Student ERP Dashboard</h2>
            <div style={styles.grid}>
                <div style={styles.card}>
                    <h3 style={styles.text}>Current GPA</h3>
                    <p style={styles.text}>3.8</p>
                    <button style={styles.button}>View Details</button>
                </div>
                <div style={styles.card}>
                    <h3 style={styles.text}>Attendance</h3>
                    <p style={styles.text}>95%</p>
                    <button style={styles.button}>View Records</button>
                </div>
                <div style={styles.card}>
                    <h3 style={styles.text}>Upcoming Assignments</h3>
                    <p style={styles.text}>5 Assignments Due</p>
                    <button style={styles.button}>View Assignments</button>
                </div>
                <div style={styles.card}>
                    <h3 style={styles.text}>Student Activities</h3>
                    <p style={styles.text}>2 Events This Month</p>
                    <button style={styles.button}>View Events</button>
                </div>
            </div>
        </div>
    );
}

function home2() {
    return (
        <div style={styles.container}>
            <h2 style={styles.text}>Student ERP Quick Access</h2>
            <div style={styles.quickAccess}>
                <button style={styles.button}>Course Materials</button>
                <button style={styles.button}>Exam Schedule</button>
                <button style={styles.button}>Submit Assignments</button>
                <button style={styles.button}>View Timetable</button>
                <button style={styles.button}>Fee Payment</button>
                <button style={styles.button}>Profile Settings</button>
            </div>
            <div style={styles.noticeBoard}>
                <h2 style={styles.text}>Notifications</h2>
                <ul style={styles.text}>
                    <li>Assignment submission deadline approaching for Math 101</li>
                    <li>Mid-term exams scheduled next week</li>
                    <li>Library book return deadline is tomorrow</li>
                </ul>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    text: {
        color: 'black', 
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        marginTop: '20px',
    },
    card: {
        border: '1px solid #ccc',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    analytics: {
        marginTop: '30px',
    },
    chart: {
        height: '300px',
        backgroundColor: '#eee',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        color: '#888',
    },
    quickAccess: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        marginTop: '30px',
    },
    button: {
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#28a745',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
    },
    noticeBoard: {
        marginTop: '40px',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #ccc',
    },
};

export { home1, home2 };

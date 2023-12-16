export async function sendEmail(data: any) {
    const apiEndpoint = 'http://freemanhwa.com/api/email';

    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        console.log('Response Status:', response.status);

        if (response.ok) {
            const responseData = await response.json();
            alert(responseData.message);
        } else {
            const errorResponse = await response.text();
            console.error('Error Response:', errorResponse);
            alert('Error: Unable to send email');
        }
    } catch (err) {
        console.error('An error occurred while sending the email:', err);
        alert('Network error: Unable to send email');
    }
}


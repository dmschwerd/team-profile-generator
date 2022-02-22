function generateMarkdown(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <header>My team</header>
    <body>
        <main>
            <section id="team-members">
                Employee name: ${data.name}
                Employee id: ${data.id}
                Employee email: ${data.email}
                Employee role: ${data.role}
                ${data.github}${data.officeNumber}${data.school}
                
            </section>
        </main>
    </body>
    </html>
    `;
}

module.exports = generateMarkdown;
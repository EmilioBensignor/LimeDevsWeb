// server/api/sendEmail.js
import { createTransport } from 'nodemailer';

export default defineEventHandler(async (event) => {
    try {
        const { body } = await readBody(event);

        // Validar que hay contenido en el body
        if (!body) {
            throw createError({
                statusCode: 400,
                message: 'El cuerpo del mensaje está vacío'
            });
        }

        // Configurar transporte SMTP para Gmail
        const transporter = createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'hellolimedevs@gmail.com',
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Configurar opciones de email
        const mailOptions = {
            from: '"Lime Devs Contact Form" <hellolimedevs@gmail.com>',
            to: 'hellolimedevs@gmail.com',
            subject: 'Nuevo formulario de contacto - Lime Devs',
            text: body,
            // Opcional: Añadir versión HTML del mensaje para mejor presentación
            html: body.replace(/\n/g, '<br>'),
        };

        // Enviar email
        const info = await transporter.sendMail(mailOptions);

        // Registrar ID del mensaje para seguimiento
        console.log('Mensaje enviado: %s', info.messageId);

        return {
            status: 'success',
            message: 'Email enviado correctamente',
            id: info.messageId
        };

    } catch (error) {
        // Registrar error detallado en el servidor
        console.error('Error al enviar email:', error);

        // Devolver respuesta de error apropiada
        throw createError({
            statusCode: 500,
            message: 'Error al enviar email'
        });
    }
});
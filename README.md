# PeoplePilot HR — MERN local project

No GitHub push and no deployment required.

## Requirements
Install Node.js LTS and MongoDB Community Server. Start MongoDB service.

## Backend
Open PowerShell in this folder:
```powershell
cd server
Copy-Item .env.example .env
npm install
npm run seed
npm run dev
```
Keep this terminal open. Test `http://localhost:5000/api/health`.

Demo logins:
- Admin: `admin@hr.local` / `Admin123!`
- HR: `hr@hr.local` / `Hr123456!`
- Employee: `employee@hr.local` / `Emp123456!`

## Frontend
Open a second terminal from the project root:
```powershell
cd client
Copy-Item .env.example .env
npm install
npm run dev
```
Open `http://localhost:5173`.

## Included workflows
Employee profiles, departments, attendance check-in/out, leave requests and approvals, payroll records, PDF payslips/reports, optional email notifications.

## Email (optional)
Fill `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_FROM` in `server/.env`, then restart the backend. If SMTP is blank, notifications are logged as skipped.

## Notes
This is a local learning starter. Change demo passwords and JWT_SECRET before real use. Payroll is not statutory/tax advice and does not calculate Pakistan tax, EOBI, or other deductions. No deployment is performed.

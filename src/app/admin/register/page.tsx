import { redirect } from 'next/navigation';

export default function AdminRegister() {
  // Registration is disabled. Only the pre-existing admin can log in.
  redirect('/admin/login');
}

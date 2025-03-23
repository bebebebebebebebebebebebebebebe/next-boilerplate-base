import SignUpForm from '@/features/auth/components/signup/signup-form';
import { createLogger } from '@/utils/logger-config';

export default function SignUpPage() {
  const logger = createLogger({
    service: 'signup page',
  });
  logger.info('Hello from SignUpPage!!');
  return <SignUpForm />;
}

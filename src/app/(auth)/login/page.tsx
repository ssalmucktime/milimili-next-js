import { Input } from '@/components/common/input/Input';
import styles from './page.module.scss';
import Button from '@/components/common/button/Button';
import { Span } from '@/components/common/text/Text';
import Image from 'next/image';
const Login = () => {
    return <main className={styles.main}>
        <section>
            <span>환영합니다!</span>
            <Button>
                <Image src={'/auth_google.svg'} alt='GoogleAuthSVG' width={24} height={24}/>
                <Span>구글 계정으로 로그인인</Span>
            </Button>
        </section>
    </main>
}
export default Login
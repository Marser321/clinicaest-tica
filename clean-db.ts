import { createClient } from '@insforge/sdk';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function clean() {
    const supabaseUrl = process.env.NEXT_PUBLIC_INSFORGE_BASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!;
    const insforge = createClient(supabaseUrl, supabaseKey);

    console.log('Borrando appointments...');
    const resApt = await insforge.database.from('appointments').delete().neq('id', 'uuid-dummy-false-id');
    console.log('Appointments delete status:', resApt.status, resApt.error);

    console.log('Borrando pacientes...');
    const resPat = await insforge.database.from('patients').delete().neq('id', 'uuid-dummy-false-id');
    console.log('Patients delete status:', resPat.status, resPat.error);
}

clean().catch(console.error);

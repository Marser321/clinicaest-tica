import { NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';

export async function GET() {
    try {
        console.log('Borrando appointments...');
        const resApt = await insforge.database.from('appointments').delete().neq('id', 'uuid-dummy-false-id');

        console.log('Borrando pacientes...');
        const resPat = await insforge.database.from('patients').delete().neq('id', 'uuid-dummy-false-id');

        return NextResponse.json({
            success: true,
            appointments: resApt,
            patients: resPat
        });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

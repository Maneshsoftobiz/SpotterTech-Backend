import { MigrationInterface, QueryRunner } from "typeorm";

export class nationalitySeeder1589784506173 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const data = [
            { country_name: "Usa", country_code: '+1', status: '1' },
            { country_name: "Canada", country_code: '+1', status: '1' },
            { country_name: "Italy", country_code: '+39', status: '1' },
            { country_name: "UK", country_code: '+44', status: '1' },
            { country_name: "Sweden", country_code: '+46', status: '1' },
            { country_name: "Germany", country_code: '+49', status: '1' },
            { country_name: "India", country_code: '+91', status: '1' },
        ];
        await queryRunner.manager.createQueryBuilder()
            .insert()
            .into("nationalities", [
                "country_name",
                "country_code",
                "status",
            ])
            .values(data)
            .execute();
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}

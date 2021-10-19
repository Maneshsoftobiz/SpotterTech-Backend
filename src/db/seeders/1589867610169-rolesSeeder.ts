import { MigrationInterface, QueryRunner } from "typeorm";

export class rolesSeeder1589867610169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const data = [
            { name: "admin", display_name: 'Admin' },
            { name: "agency", display_name: 'Company' },
            { name: "individual", display_name: 'Freelancer' },
            { name: "hire", display_name: 'Hire' },

        ];
        await queryRunner.manager.createQueryBuilder()
            .insert()
            .into("roles", [
                "name",
                "display_name",
            ])
            .values(data)
            .execute();
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}

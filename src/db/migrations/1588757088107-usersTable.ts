import { MigrationInterface, QueryRunner, Table } from "typeorm";
export class usersTable1588757088107 implements MigrationInterface {
    private usersTable = new Table({
        name: 'users',
        columns: [
            {
                name: 'id',
                type: 'INTEGER',
                length: '11',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'firstname',
                type: 'varchar',
                length: '200',
                isNullable: true,
            },
            {
                name: 'lastname',
                type: 'varchar',
                length: '200',
                isNullable: true,
            },
            {
                name: 'email',
                type: 'varchar',
                length: '100',
                isUnique: true,
            },

            {
                name: 'password',
                type: 'varchar',
                length: '200',
                isNullable: true,
            },

            {
                name: 'hashPassword',
                type: 'varchar',
                length: '200',
                isNullable: true,
            },
            {
                name: 'emailVerified',
                type: 'boolean',
                default: false,
                comment: '0 = notVerified, 1 = Verified',
            },

            {
                name: 'subscription_status',
                type: 'INTEGER',
                length: '11',
                isNullable: true,
            },
            {
                name: 'trial_days',
                type: 'INTEGER',
                length: '11',
                isNullable: true,
            },
            {
                name: 'status',
                type: 'enum',
                enum: ['1', '0'],
                default: '1',
                comment: '1 = active,0 = blocked',
            },
            {
                name: 'avatar',
                type: 'varchar',
                length: '250',
                isNullable: true,
            },
            {
                name: 'last_login',
                type: 'varchar',
                length: '250',
                isNullable: true,
            },
            {
                name: 'last_login_ip',
                type: 'varchar',
                length: '250',
                isNullable: true,
            },
            {
                name: 'created_at',
                type: 'TIMESTAMP',
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'updated_at',
                type: 'TIMESTAMP',
                isNullable: true,
                onUpdate: 'now()',
            },
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.usersTable);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.usersTable);
    }
}

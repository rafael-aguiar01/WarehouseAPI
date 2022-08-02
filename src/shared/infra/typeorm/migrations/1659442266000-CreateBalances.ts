import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBalances1659442266000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "balances",
                columns:[
                    {
                        name:"id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "product_id",
                        type: "uuid"
                    },
                    {
                        name: "balance",
                        type: "numeric"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys:[
                    {
                        name: "FKProduct",
                        referencedTableName: "products",
                        referencedColumnNames: ["id"],
                        columnNames: ["product_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("balances")
    }
}

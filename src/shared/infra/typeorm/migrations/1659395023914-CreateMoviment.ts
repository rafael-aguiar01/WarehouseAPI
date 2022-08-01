import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMoviment1659395023914 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"moviments",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "entrance",
                        type: "boolean"
                    },
                    {
                        name: "product_id",
                        type: "uuid"
                    },
                    {
                        name: "quantity",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "address_id",
                        type: "uuid"
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
        await queryRunner.dropTable("moviments")
    }

}

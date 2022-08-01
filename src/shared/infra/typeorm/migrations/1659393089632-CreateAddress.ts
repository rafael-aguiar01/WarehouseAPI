import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAnddress1659393089632 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"address",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "storehouse_id",
                        type: "uuid",
                    },
                    {
                        name: "code",
                        type: "varchar",
                    },
                    {
                        name: "capacity",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys:[
                    {
                        name: "FKStorehouse",
                        referencedTableName: "storehouses",
                        referencedColumnNames: ["id"],
                        columnNames: ["storehouse_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("storehouses")
    }

}

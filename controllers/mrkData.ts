import { client } from '../data.ts';

// @desc Get all Artists
// @route GET /api/v1/artists
const getAllMrkData = async ({ response }: { response: any }) => {
    try {
        await client.connect();

        const result = await client.query('SELECT * FROM mrk_data');
        const mrkData = new Array();

        console.log(result.rows);

        response.status = 200;
        response.body = {
            success: true,
            count: result.rowCount,
            message: 'mrkData retrieved successfully',
            data: result.rows,
        };
    } catch (error) {
        console.log('the error', error)
        response.status = 500;
        response.body = {
            success: false,
            message: error.toString(),
        };
    } finally {
        await client.end();
    }
};

// @desc Get an Artists
// @route GET /api/v1/artists/:id
const getSingleMrkData = async ({
    params,
    response,
}: {
    params: { id: string };
    response: any;
}) => {
    try {
        await client.connect();
        const result = await client.query(
            'SELECT * FROM artists WHERE id = $1',
            params.id
        );

        if (result.rows.toString() === '') {
            response.status = 404;
            response.body = {
                success: false,
                message: `No artist found with id ${params.id}`,
            };
            return;
        } else {
            const artist: any = new Object();
            result.rows.map((a) => {
                result.rowDescription.columns.map((el, i) => {
                    artist[el.name] = a[i];
                });
            });
            response.body = {
                success: true,
                message: 'Artist Retrived Successfully',
                data: artist,
            };
        }
    } catch (error) {
        response.status = 500;
        response.body = {
            success: false,
            message: error.toString(),
        };
    } finally {
        await client.end();
    }
};


export { getSingleMrkData, getAllMrkData };
